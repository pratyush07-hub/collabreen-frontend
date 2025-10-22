import React from "react";

export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2 sm:p-0">
      <div className="bg-white rounded-2xl shadow-xl p-4 w-full sm:w-[98%] h-auto sm:h-[80%] max-w-md border border-gray-700 flex flex-col">
        
        {/* Image */}
        <div className="flex-shrink-0">
          <img 
            src="/src/assets/Authentication/Logoutmodal.png" 
            alt="Logout" 
            className="mx-auto max-h-40 sm:max-h-96 object-contain" 
          />
        </div>

        {/* Text */}
        <div className="text-center flex-1 px-2 sm:px-0">
          <h1 className="text-2xl sm:text-3xl text-black font-bold mb-4">Log Out?</h1>
          <p className="text-[#9191A1] text-sm sm:text-sm px-2">
            Are you sure you want to log out? You will need to sign in again to access your account.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-around mt-4 gap-2 sm:gap-0 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-14 py-2 bg-[#636387] hover:bg-gray-500 text-white rounded-tr-md rounded-bl-md transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-14 py-2 rounded-tr-md rounded-bl-md text-white font-semibold 
                       bg-gradient-to-r from-[#EFAC16] to-[#F77128] 
                       hover:from-[#F77128] hover:to-[#EFAC16] 
                       transition-colors duration-300 mt-2 sm:mt-0"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
