import React from "react";

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  const actions = [
    "Message",
    "Suspend",
    "Delete",
    "Flag",
    "Force Verify",
    "Reset Password",
    "Explore History",
  ];

  // Dummy profile image (can replace with actual user image)
  const profilePic = `https://i.pravatar.cc/150?img=${user.id}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-[#1b2333] rounded-2xl p-6 w-[90%] max-w-xl">
        {/* Header with Profile Picture */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <img
              src={profilePic}
              alt={user.name}
              className="w-16 h-16 rounded-full border border-gray-400"
            />
            <h2 className="text-xl font-semibold text-white">{user.name}</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        {/* User Details */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-gray-300 text-sm">
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {user.phoneNumber}
          </p>
          <p>
            <span className="font-semibold">Role:</span> {user.role}
          </p>
          <p>
            <span className="font-semibold">InstaHandle:</span> {user.instaHandle}
          </p>
          <p>
            <span className="font-semibold">Signup Date:</span> {user.signupDate}
          </p>
          <p>
            <span className="font-semibold">Signup Source:</span> {user.source}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {actions.map((action) => (
            <button
              key={action}
              className="bg-[rgb(36,46,71)] hover:bg-blue-600 px-3 py-2 rounded text-white text-sm transition"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserModal;
