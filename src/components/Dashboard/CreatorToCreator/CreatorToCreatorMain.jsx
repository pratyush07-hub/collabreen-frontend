// // components/CreatorToCreator/CreatorToCreatorMain.jsx
// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import MainContent from './MainContent';

// export default function CreatorToCreatorMain() {
//     const [activeSection, setActiveSection] = useState('explore');
//     const [selectedChatId, setSelectedChatId] = useState(null);

//     const handleSidebarItemClick = (item) => {
//         if (item === 'logout') {
//             console.log('Logging out...');
//             alert('Logging out...');
//             return;
//         }
//         setActiveSection(item);
//     };

//     const handleChatSelect = (chatId) => {
//         setSelectedChatId(chatId);
//     };
//     const handleBackToChats = () => {
//         setSelectedChatId(null);
//     };

//     return (
//         <div className="flex flex-col min-w-screen bg-gray-100">
//             {/* Header */}
//             <Header 
//                 activeItem={activeSection}
//                 onNotificationsClick={() => setActiveSection('notifications')}
//             />
            

//             {/* Main Content Area */}
//             <div className="flex-1 flex flex-row  bg-[#0c0c0c] min-h-screen">
                
//                 <Sidebar
//                     activeItem={activeSection}
//                     onItemClick={handleSidebarItemClick}
//                 />

//                 {/* Main Content */}
//                 <MainContent 
//                     activeSection={activeSection}
//                     selectedChatId={selectedChatId}
//                     onChatSelect={handleChatSelect}
//                     onBackToChats={handleBackToChats}
//                 />
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import LogoutModal from './LogoutModal';
import { handleLogout } from '../../../api/logout';
import client from "../../../api/client";

export default function CreatorToCreatorMain() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('explore');
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Mobile sidebar toggle
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Check if this is first time visit or setup required
  useEffect(() => {
    if (location.state?.showSetup) {
      setActiveSection('setup');
      setIsFirstTime(true);
    } else {
      checkProfileStatus();
    }
  }, [location.state]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await client.get("/creatorprofiles/me");
        setCurrentUser(response.data.data);
        
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, []);

useEffect(() => {
  if (currentUser) {
    console.log("🎯 currentUser updated:", currentUser);
    console.log("👤 Profile Picture URL:", currentUser.profilePicture || "No profile picture set");
  }
}, [currentUser]);


  const checkProfileStatus = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/creatorprofiles/check-status`, {
        headers: {
          Authorization: `Bearer ${document.cookie.split('jwt=')[1]?.split(';')[0]}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        if (!data.hasProfile || !data.isComplete) {
          setActiveSection('setup');
          setIsFirstTime(true);
        } else {
          setActiveSection('explore');
          setIsFirstTime(false);
        }
      }
    } catch (error) {
      console.error("Error checking profile status:", error);
      setActiveSection('setup');
      setIsFirstTime(true);
    }
  };

  const handleSidebarItemClick = (item) => {
    if (item === 'logout') {
      setIsLogoutOpen(true);
      return;
    }

    if (isFirstTime && item !== 'setup') {
      alert('Please complete your profile setup first!');
      return;
    }

    setActiveSection(item);

    // Close mobile sidebar after selecting
    if (isMobileSidebarOpen) setIsMobileSidebarOpen(false);
  };

  const handleConfirmLogout = async () => {
    setIsLogoutOpen(false);
    try {
      await handleLogout();
      navigate("/signin");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };
  const handleProfileClick = () => {
  setActiveSection("profile");
};

  const handleSetupComplete = () => {
    setIsFirstTime(false);
    setActiveSection('explore');
  };

  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId);
    setActiveSection('chat');
  };

  const handleBackToChats = () => {
    setSelectedChatId(null);
  };

  return (
    <div className="flex flex-col min-w-screen bg-gray-100">
      {/* Header */}
      <Header
        user={currentUser}
        activeItem={activeSection}
        onNotificationsClick={() => setActiveSection('notifications')}
        onHamburgerClick={() => setIsMobileSidebarOpen(true)} // open mobile sidebar
        onProfileClick={handleProfileClick}
      />

      <div className="flex-1 flex flex-row min-h-screen">
  {/* Sidebar */}
  <Sidebar
    user={currentUser}
    activeItem={activeSection}
    onItemClick={handleSidebarItemClick}
    isFirstTime={isFirstTime}
    onProfileClick={handleProfileClick}
    onNotificationsClick={() => setActiveSection('notifications')}
    isOpen={isMobileSidebarOpen} // Mobile toggle
    onClose={() => setIsMobileSidebarOpen(false)}
  />

  {/* Main Content */}
  <div className="flex-1 md:w-[84%] md:ml-[16%]">
    <MainContent
      activeSection={activeSection}
      selectedChatId={selectedChatId}
      onChatSelect={handleChatSelect}
      onBackToChats={handleBackToChats}
      onSetupComplete={handleSetupComplete}
    />
  </div>

  {/* Logout Modal */}
  <LogoutModal
    isOpen={isLogoutOpen}
    onClose={() => setIsLogoutOpen(false)}
    onConfirm={handleConfirmLogout}
  />
</div>

    </div>
  );
}
