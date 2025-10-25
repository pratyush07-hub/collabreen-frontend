import React, { useState, useEffect } from "react";
import {
  getAllGroups,
  getCurrentUser,
  joinGroup,
  leaveGroup,
} from "../../../api/client";
import CreateNewGroupPage from "./CreateNewGroupPage";
import GroupChatWindow from "./GroupChatWindow";

const CommunityDashboard = () => {
  const [activeView, setActiveView] = useState("groups"); // "groups" | "createGroup"
  const [groups, setGroups] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [activeGroupChat, setActiveGroupChat] = useState(null); // Opened group chat

  useEffect(() => {
    fetchUserAndGroups();
  }, [activeView]);

  const fetchUserAndGroups = async () => {
    try {
      const userRes = await getCurrentUser();
      setCurrentUser(userRes.data.user);

      const res = await getAllGroups();
      setGroups(res.data.groups || []);
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  };

  const handleJoinGroup = async (groupId) => {
    try {
      await joinGroup(groupId);
      setGroups((prev) =>
        prev.map((group) =>
          group._id === groupId
            ? { ...group, members: [...group.members, currentUser] }
            : group
        )
      );
    } catch (err) {
      console.error("Failed to join group:", err);
      alert("Failed to join group");
    }
  };

  const handleLeaveGroup = async (groupId) => {
    try {
      await leaveGroup(groupId);
      setGroups((prev) =>
        prev.map((group) =>
          group._id === groupId
            ? {
                ...group,
                members: group.members.filter(
                  (m) => m._id !== currentUser._id
                ),
              }
            : group
        )
      );
      if (activeGroupChat === groupId) setActiveGroupChat(null);
    } catch (err) {
      console.error("Failed to leave group:", err);
      alert("Failed to leave group");
    }
  };

  const filteredGroups = groups
    .filter((g) => g.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((g) => {
      if (filter === "all") return true;
      if (filter === "myGroups")
        return g.members.some((m) => m._id === currentUser?._id);
      if (filter === "others")
        return !g.members.some((m) => m._id === currentUser?._id);
      return true;
    });

  // ================================
  // Inline rendering like ChatWindow
  // ================================
  if (activeGroupChat && currentUser) {
    return (
      <div className="flex-1 flex flex-col bg-gray-900 h-full">
        <GroupChatWindow
          groupId={activeGroupChat}
          currentUser={currentUser}
          onBack={() => setActiveGroupChat(null)}
        />
      </div>
    );
  }

  // ================================
  // Normal group dashboard view
  // ================================
  return (
    <div className="flex-1 flex flex-col bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {activeView === "groups" ? "Community Dashboard" : "Create New Group"}
        </h1>

        {activeView === "groups" ? (
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
            onClick={() => setActiveView("createGroup")}
          >
            New Group
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            onClick={() => setActiveView("groups")}
          >
            Back to Dashboard
          </button>
        )}
      </div>

      {/* Search + Filter */}
      {activeView === "groups" && (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search groups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="all">All Groups</option>
            <option value="myGroups">My Groups</option>
            <option value="others">Other Groups</option>
          </select>
        </div>
      )}

      {/* Groups Grid */}
      {activeView === "groups" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const isMember = group.members?.some(
              (m) => m._id.toString() === currentUser?._id.toString()
            );

            return (
              <div
                key={group._id}
                className="border rounded-lg shadow p-4 flex flex-col justify-between bg-white hover:shadow-md transition"
              >
                <div className="flex items-center mb-3 gap-3">
                  <img
                    src={group.image || "/default-group.png"}
                    alt={group.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {group.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-2">{group.description}</p>
                <span className="text-gray-500 text-sm mb-3">
                  Members: {group.members?.length || 0}
                </span>

                <div className="flex flex-col gap-2">
                  {isMember ? (
                    <>
                      <button
                        onClick={() => handleLeaveGroup(group._id)}
                        className="px-8 sm:px-14 py-2 rounded-tr-md rounded-bl-md text-white font-semibold 
                          bg-gradient-to-r from-[#fb2a0a] to-[#fb4f11] 
                          hover:from-[#F77128] hover:to-[#1d0a01] 
                          transition-colors duration-300 w-full"
                      >
                        Leave
                      </button>
                      <button
                        onClick={() => setActiveGroupChat(group._id)}
                        className="px-8 sm:px-14 py-2 rounded-tr-md rounded-bl-md text-white font-semibold 
                          bg-gradient-to-r from-[#10b981] to-[#34d399] 
                          hover:from-[#059669] hover:to-[#6ee7b7] 
                          transition-colors duration-300 w-full"
                      >
                        Chat
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleJoinGroup(group._id)}
                      className="px-8 sm:px-14 py-2 rounded-tr-md rounded-bl-md text-white font-semibold 
                        bg-gradient-to-r from-[#EFAC16] to-[#F77128] 
                        hover:from-[#F77128] hover:to-[#EFAC16] 
                        transition-colors duration-300 w-full"
                    >
                      Join
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Create New Group Page */}
      {activeView === "createGroup" && currentUser && (
        <CreateNewGroupPage
          currentUser={currentUser}
          onBack={() => setActiveView("groups")}
          refreshGroups={fetchUserAndGroups}
        />
      )}
    </div>
  );
};

export default CommunityDashboard;
