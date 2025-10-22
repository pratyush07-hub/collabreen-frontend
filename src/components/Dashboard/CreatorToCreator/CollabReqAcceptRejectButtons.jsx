import { useState } from "react";
import { createAcceptedCollaboration, updateCollaborationStatus } from "../../../api/client";

const CollabReqAcceptRejectButtons = ({ request, onUpdate }) => {
  const [loading, setLoading] = useState(false);

  const handleStatus = async (status) => {
    setLoading(true);
    try {
      // Update the request status
      await updateCollaborationStatus(request._id, status);

      // If accepted, create an accepted collaboration
      if (status === "accepted") {
        await createAcceptedCollaboration({
          senderId: request.sender._id,
          receiverId: request.receiver._id,
          projectName: request.title, // or request.projectName
        });
      }

      // Remove from parent list
      onUpdate(request._id);
    } catch (error) {
      console.error("Error updating request or creating collaboration:", error);
      alert("Failed to update request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleStatus("accepted")}
        disabled={loading}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
      >
        Accept
      </button>
      <button
        onClick={() => handleStatus("rejected")}
        disabled={loading}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
      >
        Reject
      </button>
    </div>
  );
};

export default CollabReqAcceptRejectButtons;
