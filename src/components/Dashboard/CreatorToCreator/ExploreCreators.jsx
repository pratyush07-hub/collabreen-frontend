import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import {
  getAllProfiles,
  likeProfile,
  getPendingLikeRequests,
  getOrCreateChat,
} from "../../../api/client";

export default function ExploreCreators() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [likedProfiles, setLikedProfiles] = useState(
    () => JSON.parse(localStorage.getItem("likedProfiles") || "[]")
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch profiles
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await getAllProfiles();
        console.log("Fetched profiles:", res.data.profiles);
        if (res.data.success) {
          setProfiles(res.data.profiles);
        }
      } catch (err) {
        console.error("Error fetching profiles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  // Poll for pending like requests
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
  const showPreviousProfile = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));

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

  // ---------- Search Logic ----------
  const filteredProfiles = profiles.filter((profile) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      profile.user?.name?.toLowerCase().includes(query) ||
      profile.location?.toLowerCase().includes(query) ||
      profile.skills?.some((skill) => skill.toLowerCase().includes(query))
    );
  });

  const currentFilteredIndex =
    currentIndex < filteredProfiles.length ? currentIndex : 0;
  const currentProfile = filteredProfiles[currentFilteredIndex];

  if (loading) return <div>⏳ Loading profiles...</div>;
  if (!profiles.length)
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <p>🎉 No more profiles!</p>
      </div>
    );

  return (
    <div className="w-full flex flex-col items-center mt-24 space-y-4">
      {/* Search Input */}
      <div className="w-full flex justify-center mb-2">
        <input
          type="text"
          placeholder="Search by name, skill, location..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentIndex(0); // reset index when search changes
          }}
          className="w-full max-w-6xl px-4 py-2 border-2 border-[#93B076] rounded-full focus:outline-none focus:border-[#93B076]"
        />
      </div>

      {/* Back Button (only for search navigation) */}
      {searchQuery && currentIndex > 0 && filteredProfiles.length > 0 && (
        <div className="w-full flex justify-center mb-2">
          <button
            onClick={showPreviousProfile}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
          >
            ◀ Back
          </button>
        </div>
      )}

      {/* Profile Card */}
      {currentProfile && (
        <ProfileCard
          key={currentProfile._id}
          profile={currentProfile}
          onLike={() => handleLike(currentProfile.user._id)}
          onDislike={() => handleDislike(currentProfile.user._id)}
          onStartConversation={() => handleStartChat(currentProfile.user._id)}
        />
      )}
    </div>
  );
}
