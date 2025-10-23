// import React, { useState } from 'react';
// import { Search, Filter, Bell, ChevronDown } from 'lucide-react';

// export default function Header({ onNotificationsClick }) {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [showNotifications, setShowNotifications] = useState(false);
//     const [showUserMenu, setShowUserMenu] = useState(false);

//     return (
//         <div className=" bg-[#0c0c0c] border-b border-gray-600 p-4 justify-between flex items-center h-[10vh]">
            
//                 <div className='px-2'>
//                     <div className="w-20 h-20">
//                         <img src="../src/assets/Winkizlogo.png" alt="" />
//                     </div>
//                 </div>
//             <div className="flex space-x-4">
                

//                 {/* Notifications */}
//                 <div className="relative">
//                     <button
//                         onClick={onNotificationsClick}
//                         className="p-2 rounded-lg transition-colors relative"
//                     >
//                         <Bell size={24} className="text-white mt-1" />
//                         <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-1"></div>
//                     </button>

//                     {showNotifications && (
//                         <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
//                             <div className="p-4 border-b border-gray-200">
//                                 <h3 className="font-semibold text-gray-900">Notifications</h3>
//                             </div>
//                             <div className="p-4">
//                                 <p className="text-gray-500 text-sm">No new notifications</p>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//                     <div className='h-6 mt-3 w-0.5 bg-white'></div>

//                 {/* User Menu */}
//                 <div className="relative pr-2">
//                     <button
//                         onClick={() => setShowUserMenu(!showUserMenu)}
//                         className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg p-2 transition-colors"
//                     >
//                         <img
//                             src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
//                             alt="User avatar"
//                             className="w-8 h-8 rounded-full border-2 border-white object-cover"
//                         />
//                         {/* <ChevronDown size={16} className="text-gray-600" /> */}
//                     </button>

//                     {/* {showUserMenu && (
//                         <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
//                             <div className="py-2">
//                                 <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</button>
//                                 <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</button>
//                                 <hr className="my-1" />
//                                 <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Logout</button>
//                             </div>
//                         </div>
//                     )} */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// Header.jsx
import React from "react";
import { Bell, Menu } from "lucide-react";
import logo from "../../../assets/Winkizlogo.png";

export default function Header({ onNotificationsClick, onHamburgerClick }) {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#0c0c0c] border-b border-gray-600 p-4 flex justify-between items-center h-[10vh]">
      {/* Logo */}
      <div className="px-0 md:px-2">
        <div className="w-16 h-16 md:w-20 md:h-20">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Desktop Right Section */}
        <div className="hidden md:flex space-x-4">
          <div className="relative">
            <button
              onClick={onNotificationsClick}
              className="p-2 rounded-lg transition-colors relative"
            >
              <Bell size={24} className="text-white mt-1" />
              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-1"></div>
            </button>
          </div>
          <div className="w-0.5 h-6 bg-white mt-3"></div>
          <div className="relative pr-2">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="User avatar"
              className="w-8 h-8 rounded-full border-2 mt-2 border-white object-cover"
            />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={onHamburgerClick} // this triggers Sidebar open
            className="p-2 rounded-lg"
          >
            <Menu size={28} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
