// import React from 'react';
// import { Search, MessageCircle, User, FolderOpen, Settings, LogOut, Users  } from 'lucide-react';

// export default function Sidebar({ activeItem, onItemClick , isFirstTime }) {
//     const menuItems = [
//         { id: 'explore', label: 'Explore', icon: Search },
//         { id: 'chat', label: 'Chat', icon: MessageCircle, hasNotification: true },
//         { id: 'profile', label: 'User Profile', icon: User },
//         { id: 'community', label: 'Community', icon: Users },
//         { id: 'projects', label: 'Projects', icon: FolderOpen },
//         { id: 'settings', label: 'Settings', icon: Settings },
//     ];

//     return (
//         <div className="w-64 bg-[#0c0c0c] h-screen flex flex-col border-r border-gray-600 p-3">
//             {isFirstTime && (
//                 <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
//                     <p className="text-sm text-yellow-800">
//                         Complete your profile setup to access all features!
//                     </p>
//                 </div>
//             )}

//             {/* Navigation Items */}
//             <nav className="flex-1 px-4">
//                 {menuItems.map((item) => {
//                     const Icon = item.icon;
//                     const isActive = activeItem === item.id;

//                     return (
//                         <button
//                             key={item.id}
//                             onClick={() => onItemClick(item.id)}
//                             className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors mb-2 relative ${isActive
//                                     ? 'bg-orange-500 text-white'
//                                     : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                                 }`}
//                         >
//                             <Icon size={20} />
//                             <span className="font-medium">{item.label}</span>
//                             {item.hasNotification && (
//                                 <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 left-8"></div>
//                             )}
//                         </button>
//                     );
//                 })}
//             </nav>

//             {/* Logout */}
//             <div className="p-4">
//                 <button
//                     onClick={() => onItemClick('logout')}
//                     className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
//                 >
//                     <LogOut size={20} />
//                     <span className="font-medium">Logout</span>
//                 </button>
//             </div>
//         </div>
//     );
// }


// Sidebar.jsx
import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { Search, MessageCircle, User, FolderOpen, Settings, LogOut, Users } from "lucide-react";

export default function Sidebar({ activeItem, onItemClick, isFirstTime, isOpen, onClose, onNotificationsClick }) {
  const menuItems = [
    { id: "explore", label: "Explore", icon: Search },
    { id: "chat", label: "Chat", icon: MessageCircle, hasNotification: true },
    { id: "profile", label: "User Profile", icon: User },
    { id: "community", label: "Community", icon: Users },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:top-16 md:left-0 md:w-64 md:h-[92vh] md:flex md:flex-col md:border-r md:border-gray-600 md:bg-[#0c0c0c] md:p-3 z-40">
        {isFirstTime && (
          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 mb-4">
            <p className="text-sm text-yellow-800">
              Complete your profile setup to access all features!
            </p>
          </div>
        )}
        <nav className="flex-1 px-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left mb-2 transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="p-4">
          <button
            onClick={() => onItemClick("logout")}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 flex md:hidden pointer-events-none`}
      >
        {/* Overlay */}
        <div
          onClick={onClose}
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        ></div>

        {/* Sidebar Panel */}
        <div
          className={`relative w-64 h-screen bg-[#0c0c0c] flex flex-col justify-between p-3
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full pointer-events-none"}
          `}
        >
          {/* Close button */}
          <button
            className="self-end mb-4 text-white"
            onClick={onClose}
          >
            ✕
          </button>
          {/* <div className="flex items-center space-x-4"> */}
        {/* Desktop Right Section */}
        {/* <div className=" md:flex space-x-4"> */}
          {/* <div className="relative">
            <button
              onClick={onNotificationsClick}
              className="p-2 rounded-lg transition-colors relative"
            >
              <Bell size={24} className="text-white mt-1" />
              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-1"></div>
            </button>
          </div> */}
          <div className="flex justify-between">

          <div className="pb-4 pl-4">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="User avatar"
              className="w-8 h-8 rounded-full border-2 mt-2 border-white object-cover"
              />
          {/* </div>
        </div> */}
    </div>
    <div className="">
            <button
              onClick={onNotificationsClick}
              className="p-2 rounded-lg transition-colors relative"
            >
              <Bell size={24} className="text-white mt-1" />
              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-1"></div>
            </button>
          </div>

              </div>
          {/* Menu Items */}
          <nav className="flex-1 flex flex-col justify-start px-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onItemClick(item.id);
                    onClose(); // close after click
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors mb-2 ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-3">
            <button
              onClick={() => {
                onItemClick("logout");
                onClose();
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
