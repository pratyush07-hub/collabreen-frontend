// import React from 'react';

// export default function ChatList({ onChatSelect }) {
//     const chats = [
//         {
//             id: '1',
//             name: 'Sarah Chen',
//             profession: 'Photographer',
//             location: 'Sanganer, Jaipur',
//             lastMessage:
//                 "Perfect! I'll start preparing the equipment for next week's shoot.",
//             timestamp: 'Jan 15',
//             unread: true,
//             avatar:
//                 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
//         },
//         {
//             id: '2',
//             name: 'Vikas Choudhary',
//             profession: 'Music Producer',
//             location: 'Mansarovar, Jaipur',
//             lastMessage:
//                 'Music Video Background Score - Collaboration Request',
//             timestamp: 'Jan 14',
//             unread: true,
//             avatar:
//                 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
//         },
//         {
//             id: '3',
//             name: 'Suresh Saini',
//             profession: 'Blogger',
//             location: 'Vaishali Nagar, Jaipur',
//             lastMessage:
//                 'Thanks for the amazing collaboration! The content turned out great',
//             timestamp: 'Jan 14',
//             unread: false,
//             avatar:
//                 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
//         },
//         {
//             id: '4',
//             name: 'David Kim',
//             profession: 'Videographer',
//             location: 'Vaishali Nagar, Jaipur',
//             lastMessage:
//                 "I've uploaded the final video files to the project workspace.",
//             timestamp: 'Jan 13',
//             unread: false,
//             avatar:
//                 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
//         },
//     ];

//     return (
//         <div className="bg-white min-h-screen">
//             {/* Header */}
//             <div className="p-6 border-b border-gray-200">
//                 <div className="flex items-center justify-between">
//                     <div>
//                         <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
//                         <p className="text-gray-600 text-sm">
//                             Stay connected with your creative network
//                         </p>
//                     </div>
//                     <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
//                         3 unread
//                     </div>
//                 </div>
//             </div>

//             {/* Chat List */}
//             <div className="p-4 space-y-3">
//                 {chats.map((chat) => (
//                     <div
//                         key={chat.id}
//                         onClick={() => onChatSelect(chat.id)}
//                         className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors"
//                     >
//                         <div className="flex items-start space-x-3">
//                             <div className="relative">
//                                 <img
//                                     src={chat.avatar}
//                                     alt={chat.name}
//                                     className="w-12 h-12 rounded-full object-cover"
//                                 />
//                                 {chat.unread && (
//                                     <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
//                                         <span className="text-white text-xs font-bold">1</span>
//                                     </div>
//                                 )}
//                             </div>

//                             <div className="flex-1 min-w-0">
//                                 <div className="flex items-center justify-between mb-1">
//                                     <h3 className="font-semibold text-gray-900 truncate">
//                                         {chat.name}
//                                     </h3>
//                                     <span className="text-gray-500 text-sm">{chat.timestamp}</span>
//                                 </div>

//                                 <div className="flex items-center space-x-2 mb-2">
//                                     <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
//                                         {chat.profession}
//                                     </span>
//                                     <span className="text-gray-500 text-sm">📍 {chat.location}</span>
//                                 </div>

//                                 <p
//                                     className={`text-sm truncate ${chat.unread
//                                             ? 'text-gray-900 font-medium'
//                                             : 'text-gray-600'
//                                         }`}
//                                 >
//                                     {chat.lastMessage}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* No More Chats */}
//             <div className="text-center py-8">
//                 <p className="text-gray-500 italic">"No More Chats"</p>
//             </div>
//         </div>
//     );
// }


import React, { useState, useEffect } from 'react';
import { getUserChats } from '../../../api/client';

export default function ChatList({ onChatSelect }) {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchChats();
    }, []);

    const fetchChats = async () => {
        try {
            setLoading(true);
            const response = await getUserChats();
            console.log("Fetched chats:", response.data);
            if (response.data.success) {
                setChats(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching chats:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className="text-gray-500">Loading chats...</div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
                        <p className="text-gray-600 text-sm">
                            Stay connected with your creative network
                        </p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {chats.filter(chat => chat.unread).length} unread
                    </div>
                </div>
            </div>

            {/* Chat List */}
            <div className="p-4 space-y-3">
                {chats.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No conversations yet</p>
                    </div>
                ) : (
                    chats.map((chat) => {
                        const otherParticipant = chat.participants.find(p => p._id !== chat.currentUserId);
                        return (
                            <div
                                key={chat._id}
                                onClick={() => onChatSelect(chat._id)}
                                className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-start space-x-3">
                                    <div className="relative">
                                        <img
                                            src={otherParticipant?.profilePic || '/default-avatar.png'}
                                            alt={otherParticipant?.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        {chat.unread && (
                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">1</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-semibold text-gray-900 truncate">
                                                {otherParticipant?.name}
                                            </h3>
                                            <span className="text-gray-500 text-sm">
                                                {new Date(chat.updatedAt).toLocaleDateString()}
                                            </span>
                                        </div>

                                        <p className="text-sm truncate text-gray-600">
                                            {chat.lastMessage?.content || 'No messages yet'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}