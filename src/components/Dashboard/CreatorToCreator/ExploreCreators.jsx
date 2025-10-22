import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import {
  getAllProfiles,
  likeProfile,
  getPendingLikeRequests,
  respondLikeRequest,
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

  // Fetch profiles
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await getAllProfiles();
        console.log("Fetched profiles:", res.data.profiles);

        if (res.data.success) {
          const filtered = res.data.profiles.filter((p) => {
            const id = p.user?._id || p._id;
            return !likedProfiles.includes(id);
          });
          setProfiles(filtered);
        }
      } catch (err) {
        console.error("Error fetching profiles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [likedProfiles]);

  // Poll for pending like requests every 10 seconds
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

  const showNextProfile = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleLike = async (profileId) => {
    try {
      await likeProfile(profileId); // Send like to backend
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
      // You can redirect to chat page if needed
    } catch (err) {
      console.error("Error starting chat", err);
    }
  };

  const handleRespondRequest = async (requestId, action) => {
    try {
      const res = await respondLikeRequest(requestId, action);
      console.log("Responded to request:", res.data);
      setIncomingRequests((prev) => prev.filter((r) => r._id !== requestId));
    } catch (err) {
      console.error("Error responding to request:", err);
    }
  };

  if (loading) return <div>⏳ Loading profiles...</div>;
  if (!profiles.length || currentIndex >= profiles.length)
    return <div>🎉 No more profiles!</div>;

  const currentProfile = profiles[currentIndex];

  return (
    <div className="w-full flex flex-col items-center mt-6 space-y-6">
      <ProfileCard
        key={currentProfile._id}
        profile={currentProfile}
        onLike={() => handleLike(currentProfile.user._id)}
        onDislike={() => handleDislike(currentProfile.user._id)}
        onStartConversation={() => handleStartChat(currentProfile.user._id)}
      />

      {/* Incoming Like Requests */}
      {incomingRequests.length > 0 && (
        <div className="fixed top-4 right-4 w-72 bg-white border rounded shadow p-4">
          <h2 className="font-semibold mb-2">New Likes</h2>
          {incomingRequests.map((req) => (
            <div
              key={req._id}
              className="flex justify-between items-center mb-2"
            >
              <div className="flex items-center">
                <img
                  src={req.from.profilePic}
                  alt={req.from.name}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span>{req.from.name} liked you!</span>
              </div>
              <div className="flex gap-1">
                <button
                  className="px-2 py-1 bg-green-500 text-white rounded"
                  onClick={() => handleRespondRequest(req._id, "accepted")}
                >
                  Accept
                </button>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleRespondRequest(req._id, "rejected")}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
