import React from "react";

const CommunityModal = ({ community, onClose }) => {
  if (!community) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-[#1b2333] rounded-2xl p-6 w-[90%] max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Group Name: {community.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        {/* Community Image */}
        <div className="flex justify-center mb-4">
          <img
            src={community.image || "https://via.placeholder.com/150"}
            alt={community.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-500"
          />
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-gray-300 text-sm">
          <p>
            <span className="font-semibold">Owner:</span>{" "}
            {community.createdBy?.name}
          </p>
          <p>
            <span className="font-semibold">Visibility:</span>{" "}
            {community.privacy}
          </p>
          <p>
            <span className="font-semibold">Members:</span>{" "}
            {community.members?.length}
          </p>
          <p>
            <span className="font-semibold">Posts:</span> {community.posts}
          </p>
          <p>
            <span className="font-semibold">CreatedAt: </span>
            {new Date(community.createdAt).toLocaleString()}
          </p>

          <p>
            <span className="font-semibold">Category:</span>{" "}
            {community.category}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="bg-[rgb(36,46,71)] hover:bg-red-600 px-3 py-2 rounded text-white text-sm">
            Delete Community
          </button>
          <button className="bg-[rgb(36,46,71)] hover:bg-yellow-600 px-3 py-2 rounded text-white text-sm">
            Suspend Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityModal;
