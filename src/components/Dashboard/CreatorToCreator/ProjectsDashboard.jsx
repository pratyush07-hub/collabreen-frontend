import React, { useState, useEffect } from "react";
import { getAcceptedCollaborations, getCurrentUser } from "../../../api/client";
import CollabReqAcceptReject from "./CollabReqAcceptReject";
import FileSharing from "./FileSharing";
import { FaArrowRight } from "react-icons/fa";

const ProjectsDashboard = () => {
  const [activeView, setActiveView] = useState("projects"); // 'projects' | 'collaborationRequests' | 'filesharing'
  const [acceptedCollabs, setAcceptedCollabs] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCollab, setSelectedCollab] = useState(null);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    if (activeView === "projects") {
      fetchUserAndCollabs();
    }
  }, [activeView]);

  const fetchUserAndCollabs = async () => {
    try {
      setLoading(true); 
      const userRes = await getCurrentUser();
      console.log("Fetched current user:", userRes.data.user);
      setCurrentUser(userRes.data.user);

      const { data } = await getAcceptedCollaborations();
      console.log("Fetched accepted collaborations:", data.collaborations);
      const activeCollabs = data.collaborations.filter(
        (collab) => collab.status === "active"
      );
      setAcceptedCollabs(activeCollabs);
    } catch (error) {
      console.error("Error fetching collaborations:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="p-6 max-w-5xl mt-24 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          {activeView === "projects"
            ? "Projects Dashboard"
            : activeView === "filesharing"
            ? "File Sharing"
            : "Collaboration Requests"}
        </h1>
      </div>

      {/* === Projects View === */}
      {activeView === "projects" && (
        <>
          {loading ? (
            <div className="flex flex-col items-center justify-center mt-20 space-y-3">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-500 text-center animate-pulse">
                Loading Projects for you, please wait...
              </p>
            </div>
          ) : acceptedCollabs.length > 0 ? (
            <div className="space-y-4">
              {acceptedCollabs.map((collab) => {
                if (!currentUser) return null;

                const otherUser =
                  collab.sender._id === currentUser._id
                    ? collab.receiver
                    : collab.sender;

                return (
                  <div
                    key={collab._id}
                    className="flex items-center justify-between bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 cursor-pointer"
                  >
                    {/* Other collaborator */}
                    <div className="flex items-center space-x-3 w-1/3">
                      <img
                        src={otherUser.profilePic || "/default-avatar.png"}
                        alt={otherUser.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <p className="font-medium text-gray-700 truncate">
                        {otherUser.name}
                      </p>
                    </div>

                    {/* Project title */}
                    <div className="flex-1 text-center">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {collab.projectName}
                      </p>
                    </div>

                    <div
                      className="w-1/12 flex justify-end cursor-pointer"
                      onClick={() => {
                        setSelectedCollab(collab);
                        setActiveView("filesharing");
                      }}
                    >
                      <FaArrowRight className="text-gray-400 text-lg hover:text-gray-600" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-10">
              No active collaborations yet.
            </p>
          )}
        </>
      )}

      {/* === FileSharing View === */}
      {activeView === "filesharing" && selectedCollab && currentUser && (
        <FileSharing
          collab={selectedCollab}
          currentUser={currentUser}
          onBack={() => setActiveView("projects")}
        />
      )}

      {/* === Collaboration Requests === */}
      {activeView === "collaborationRequests" && currentUser && (
        <CollabReqAcceptReject currentUser={currentUser} />
      )}
    </div>
  );
};

export default ProjectsDashboard;






