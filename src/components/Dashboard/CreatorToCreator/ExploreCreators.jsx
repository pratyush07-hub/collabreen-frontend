import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import FilterModal from "./FilterModal"; // <-- Make sure this exists
import {
  getAllProfiles,
  likeProfile,
  getPendingLikeRequests,
  getOrCreateChat,
} from "../../../api/client";
import { Search, Filter } from "lucide-react"; // <-- Filter Imported

export default function ExploreCreators() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [likedProfiles, setLikedProfiles] = useState(
    () => JSON.parse(localStorage.getItem("likedProfiles") || "[]")
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Fetch profiles
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await getAllProfiles();
        if (res.data.success) {
          setProfiles(res.data.profiles);
          setFilteredProfiles(res.data.profiles);
        }
      } catch (err) {
        console.error("Error fetching profiles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  // Filter profiles by search
  useEffect(() => {
  const q = search.toLowerCase();

  const results = profiles.filter((p) => {
    const name = p.user?.name?.toLowerCase() || "";
    const location = p.location?.toLowerCase() || "";
    const skills = (p.skills || []).join(" ").toLowerCase();

    const isAlreadyLiked = likedProfiles.includes(String(p.user._id));

    return (
      !isAlreadyLiked && (name.includes(q) || location.includes(q) || skills.includes(q))
    );
  });

  setFilteredProfiles(results);
  setCurrentIndex(0);
}, [search, profiles, likedProfiles]);

  // Check pending requests
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await getPendingLikeRequests();
        if (res.data.success) setIncomingRequests(res.data.data);
      } catch (err) {
        console.error("Error fetching requests:", err);
      }
    };

    fetchRequests();
    const interval = setInterval(fetchRequests, 10000);
    return () => clearInterval(interval);
  }, []);

  const saveLikedProfile = (profileId) => {
    setLikedProfiles((prev) => {
      const updated = [...prev, String(profileId)];
      localStorage.setItem("likedProfiles", JSON.stringify(updated));
      return updated;
    });
  };

  const showNextProfile = () => setCurrentIndex((prev) => prev + 1);

  const handleLike = async (profileId) => {
    try {
      await likeProfile(profileId);
      saveLikedProfile(profileId);
      showNextProfile();
    } catch (err) {
      console.error("Error liking profile:", err);
    }
  };

  const handleDislike = (profileId) => {
    saveLikedProfile(profileId);
    showNextProfile();
  };

  const handleStartChat = async (otherUserId) => {
    try {
      const res = await getOrCreateChat(otherUserId);
      console.log("Chat started/fetched", res.data);
    } catch (err) {
      console.error("Error starting chat", err);
    }
  };

  if (loading) return <div className="pt-32">⏳ Loading profiles...</div>;

  if (!filteredProfiles.length)
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center pt-32 space-y-4">
      <p className="text-lg font-semibold">😢 No profiles match your search!</p>

      <button
        onClick={() => setSearch("")}
        className="px-6 py-2 border-2 border-[#93B076] rounded-full text-black hover:bg-[#93B076] hover:text-white transition"
      >
        🔙 Back
      </button>
    </div>
  );

  if (currentIndex >= filteredProfiles.length)
    return (
      <div className="flex h-screen w-full justify-center items-center pt-32">
        <p>🎉 No more profiles!</p>
      </div>
    );

  const currentProfile = filteredProfiles[currentIndex];

  return (
    <div className="w-full flex flex-col items-center pt-24 space-y-6">

      {/* 🔍 SEARCH BAR + FILTER BUTTON */}
      <div className="flex items-center justify-between gap-4 px-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-6xl">
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name, skill, location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-black border-2 border-[#93B076] rounded-full focus:border-[#93B076] outline-none"
          />
        </div>

        {/* FILTER BUTTON */}
        <button
          onClick={() => setShowFilterModal(true)}
          className="p-3 border-2 border-[#93B076] rounded-lg hover:bg-gray-50 transition"
        >
          <Filter size={20} className="text-black" />
        </button>
      </div>

      {/* FILTER MODAL */}
      {showFilterModal && (
        <FilterModal
          isOpen={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          onApplyFilters={(filters) => {
            console.log("Applied Filters:", filters);
            setShowFilterModal(false);
          }}
        />
      )}

      {/* PROFILE CARD */}
      <ProfileCard
        key={currentProfile._id}
        profile={currentProfile}
        onLike={() => handleLike(currentProfile.user._id)}
        onDislike={() => handleDislike(currentProfile.user._id)}
        onStartConversation={() => handleStartChat(currentProfile.user._id)}
      />
    </div>
  );
}
