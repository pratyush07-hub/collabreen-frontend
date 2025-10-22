import React, { useEffect, useState } from "react";
import { getCollaborationRequests } from "../../../api/client";
import CollabReqAcceptRejectButtons from "./CollabReqAcceptRejectButtons";

const CollabReqAcceptReject = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        const response = await getCollaborationRequests("received");
        console.log("getresponse", response)
        if (response.data.success) {
          setRequests(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching collaboration requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleUpdate = (requestId) => {
    setRequests(prev => prev.filter(req => req._id !== requestId));
  };

  if (loading) return <div className="p-6 text-center">Loading collaboration requests...</div>;
  if (requests.length === 0) return <div className="p-6 text-center text-gray-500">No collaboration requests</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Collaboration Requests</h2>
      {requests.map((req) => (
        <div
          key={req._id}
          className="flex items-center justify-between p-4 border rounded-lg mb-4 shadow-sm bg-white"
        >
          <div className="flex items-center space-x-4">
            <img
              src={req.sender.profilePic || "/default-avatar.png"}
              alt={req.sender.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{req.sender.name}</p>
              <p className="text-gray-500 text-sm">{req.title}</p>
              {req.description && <p className="text-gray-400 text-sm">{req.description}</p>}
            </div>
          </div>
          <CollabReqAcceptRejectButtons request={req} onUpdate={handleUpdate} />
        </div>
      ))}
    </div>
  );
};

export default CollabReqAcceptReject;
