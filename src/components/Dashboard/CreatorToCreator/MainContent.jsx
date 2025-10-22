
// // import React from 'react';
// // import ProfileCard from './ProfileCard';
// // import ChatList from './ChatList';
// // import ChatWindow from './ChatWindow';
// // import Notifications from './Notifications';
// // import ProfileSetup from './ProfileSetup';
// // import PhotographerProfile from './PhotographerProfile';

// // export default function MainContent({ activeSection, selectedChatId, onChatSelect, onBackToChats }) {
// //     // Sample profile data
// //     const sampleProfile = {
// //         id: '1',
// //         name: 'Gagan Choudhary',
// //         title: 'PHOTOGRAPHER',
// //         description: 'Fashion photographer with 5+ years experience. Love capturing authentic moments and creating visual stories.',
// //         rating: 4.8,
// //         reviewCount: 25,
// //         location: 'Jaipur',
// //         isAvailable: true,
// //         lookingFor: 'Looking for a creative partner in video editing and graphic design.',
// //         tags: ['Fashion', 'Portrait'],
// //         profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
// //         bannerImage: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800'
// //     };

// //     const handleStartConversation = (profileId) => {
// //         console.log('Starting conversation with:', profileId);
// //         alert('Starting conversation...');
// //     };

// //     const handleCloseProfile = () => {
// //         console.log('Closing profile');
// //     };

// //     const handleLikeProfile = (profileId) => {
// //         console.log('Liked profile:', profileId);
// //     };

// //     const renderContent = () => {
// //         switch (activeSection) {
// //             case 'setup':
// //                 return (
// //                     <ProfileSetup onSetupComplete={() => {
// //                         // Refresh state or redirect to 'explore'
// //                         activeSection('explore'); // You'll need to lift state up
// //                     }} />
// //                 );
// //             case 'explore':
// //                 return (
// //                     <div className="p-8">
// //                         <ProfileCard
// //                             profile={sampleProfile}
// //                             onStartConversation={handleStartConversation}
// //                             onClose={handleCloseProfile}
// //                             onLike={handleLikeProfile}
// //                         />
// //                     </div>
// //                 );

// //             case 'chat':
// //                 return selectedChatId ? (
// //                     <ChatWindow chatId={selectedChatId} onBack={onBackToChats} />
// //                 ) : (
// //                     <ChatList onChatSelect={onChatSelect} />
// //                 );

// //             case 'profile':
// //                 return (
// //                     // <div className="p-8 text-center">
// //                     //     <h2 className="text-2xl font-bold text-gray-900 mb-4">User Profile</h2>
// //                     //     <p className="text-gray-600">Manage your profile settings and information.</p>
// //                     // </div>
// //                     <div>
// //                         <PhotographerProfile/>
// //                     </div>
// //                 );

// //             case 'projects':
// //                 return (
// //                     <div className="p-8 text-center">
// //                         <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
// //                         <p className="text-gray-600">View and manage your projects.</p>
// //                     </div>
// //                 );

// //             case 'settings':
// //                 return (
// //                     <div className="p-8 text-center">
// //                         <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
// //                         <p className="text-gray-600">Adjust your account settings and preferences.</p>
// //                     </div>
// //                 );

// //             case 'notifications':
// //                 return <Notifications />;

// //             default:
// //                 return (
// //                     <div className="p-8">
// //                         <ProfileCard
// //                             profile={sampleProfile}
// //                             onStartConversation={handleStartConversation}
// //                             onClose={handleCloseProfile}
// //                             onLike={handleLikeProfile}
// //                         />
// //                     </div>
// //                 );
// //         }
// //     };

// //     return (
// //         <div className="flex-1 bg-gray-50 min-h-screen">
// //             {renderContent()}
// //         </div>
// //     );
// // }


// // MainContent.jsx
// import React from 'react';
// import ExploreCreators from './ExploreCreators'; // Import the new component
// import ChatList from './ChatList';
// import ChatWindow from './ChatWindow';
// import Notifications from './Notifications';
// import ProfileSetup from './ProfileSetup';
// import PhotographerProfile from './PhotographerProfile';
// import { createChat } from '../../../api/client';

// export default function MainContent({ activeSection, selectedChatId, onChatSelect, onBackToChats, onSetupComplete }) {
//     const handleStartConversation = (profileId) => {
//         console.log('Starting conversation with:', profileId);
//         alert('Starting conversation...');
//     };

//     const handleCloseProfile = () => {
//         console.log('Closing profile');
//     };

//     const handleLikeProfile = (profileId) => {
//         console.log('Liked profile:', profileId);
//     };

//     const renderContent = () => {
//         switch (activeSection) {
//             case 'setup':
//                 return (
//                     <ProfileSetup onSetupComplete={onSetupComplete} />
//                 );
//             case 'explore':
//                 return (
//                     <ExploreCreators
//                         onStartConversation={handleStartConversation}
//                         onClose={handleCloseProfile}
//                         onLike={handleLikeProfile}
//                     />
//                 );
//             case 'chat':
//                 return selectedChatId ? (
//                     <ChatWindow chatId={selectedChatId} onBack={onBackToChats} />
//                 ) : (
//                     <ChatList onChatSelect={onChatSelect} />
//                 );
//             case 'profile':
//                 return <PhotographerProfile />;
//             case 'projects':
//                 return (
//                     <div className="p-8 text-center">
//                         <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
//                         <p className="text-gray-600">View and manage your projects.</p>
//                     </div>
//                 );
//             case 'settings':
//                 return (
//                     <div className="p-8 text-center">
//                         <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
//                         <p className="text-gray-600">Adjust your account settings and preferences.</p>
//                     </div>
//                 );
//             case 'notifications':
//                 return <Notifications />;
//             default:
//                 return (
//                     <ExploreCreators
//                         onStartConversation={handleStartConversation}
//                         onClose={handleCloseProfile}
//                         onLike={handleLikeProfile}
//                     />
//                 );
//         }
//     };

//     return (
//         <div className="flex-1 bg-gray-50 min-h-screen">
//             {renderContent()}
//         </div>
//     );
// }

// MainContent.jsx
import React, { useState } from 'react';
import ExploreCreators from './ExploreCreators';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import Notifications from './Notifications';
import ProfileSetup from './ProfileSetup';
import PhotographerProfile from './PhotographerProfile';
import { createChat } from '../../../api/client';
import ProjectsDashboard from './ProjectsDashboard';
import CommunityDashboard from './CommunityDashboard';

export default function MainContent({ activeSection, selectedChatId, onChatSelect, onBackToChats, onSetupComplete }) {
    const [loading, setLoading] = useState(false);

    const handleStartConversation = async (profileId) => {
        try {
            setLoading(true);
            console.log('Starting conversation with:', profileId);
            
            // Create chat with the selected profile
            const response = await createChat(profileId);
            
            if (response.data.success) {
                const chatId = response.data.data._id;
                console.log('Chat created:', chatId);
                
                // Navigate to chat section and select the new chat
                onChatSelect(chatId);
                // You might need to add a function to switch to chat section
                // This would require updating the parent component (CreatorToCreatorMain)
            }
        } catch (error) {
            console.error('Error creating chat:', error);
            alert('Failed to start conversation. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleCloseProfile = () => {
        console.log('Closing profile');
    };

    const handleLikeProfile = (profileId) => {
        console.log('Liked profile:', profileId);
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'setup':
                return (
                    <ProfileSetup onSetupComplete={onSetupComplete} />
                );
            case 'explore':
                return (
                    <ExploreCreators
                        onStartConversation={handleStartConversation}
                        onClose={handleCloseProfile}
                        onLike={handleLikeProfile}
                        loading={loading}
                    />
                );
            case 'chat':
                return selectedChatId ? (
                    <ChatWindow chatId={selectedChatId} onBack={onBackToChats} />
                ) : (
                    <ChatList onChatSelect={onChatSelect} />
                );
            case 'profile':
                return <PhotographerProfile />;
            case 'community':
                return <CommunityDashboard />;
            case 'projects':
                return <ProjectsDashboard />;
            case 'settings':
                return (
                    <div className="p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
                        <p className="text-gray-600">Adjust your account settings and preferences.</p>
                    </div>
                );
            case 'notifications':
                return <Notifications />;
            default:
                return (
                    <ExploreCreators
                        onStartConversation={handleStartConversation}
                        onClose={handleCloseProfile}
                        onLike={handleLikeProfile}
                        loading={loading}
                    />
                );
        }
    };
    

    return (
        <div className="flex-1 bg-gray-50 min-h-screen">
            {renderContent()}
        </div>
    );
}