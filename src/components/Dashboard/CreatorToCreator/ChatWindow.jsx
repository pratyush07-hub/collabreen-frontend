// // import React, { useState } from 'react';
// // import { ArrowLeft, Phone, Video, MoreVertical, Paperclip, Mic, Send } from 'lucide-react';
// // import CollaborationModal from './CollaborationModal';

// // export default function ChatWindow({ chatId, onBack }) {
// //     const [message, setMessage] = useState('');
// //     const [showCollaborationModal, setShowCollaborationModal] = useState(false);

// //     // Sample chat data based on chatId
// //     const chatData = {
// //         '1': {
// //             name: 'Sarah Chen',
// //             profession: 'Photographer',
// //             subtitle: 'Visual Artist',
// //             avatar:
// //                 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
// //             messages: [
// //                 {
// //                     id: '1',
// //                     text: "Hi! I saw your profile and loved your video work. Would you be interested in collaborating on a fashion shoot?",
// //                     timestamp: '08:30 PM',
// //                     isOwn: false,
// //                     avatar:
// //                         'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
// //                 },
// //                 {
// //                     id: '2',
// //                     text: "That sounds amazing! I'd love to hear more about the project.",
// //                     timestamp: '08:30 PM',
// //                     isOwn: true,
// //                     avatar:
// //                         'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
// //                 },
// //             ],
// //         },
// //     };

// //     const currentChat = chatData[chatId] || chatData['1'];

// //     const handleSendMessage = () => {
// //         if (message.trim()) {
// //             console.log('Sending message:', message);
// //             setMessage('');
// //         }
// //     };

// //     const handleKeyPress = (e) => {
// //         if (e.key === 'Enter' && !e.shiftKey) {
// //             e.preventDefault();
// //             handleSendMessage();
// //         }
// //     };

// //     return (
// //         <div className="flex flex-col h-screen bg-gray-900">
// //             {/* Header */}
// //             <div className="bg-white border-b border-gray-200 p-4">
// //                 <div className="flex items-center justify-between">
// //                     <div className="flex items-center space-x-3">
// //                         <button
// //                             onClick={onBack}
// //                             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
// //                         >
// //                             <ArrowLeft size={20} className="text-gray-600" />
// //                         </button>

// //                         <img
// //                             src={currentChat.avatar}
// //                             alt={currentChat.name}
// //                             className="w-10 h-10 rounded-full object-cover"
// //                         />

// //                         <div>
// //                             <h2 className="font-semibold text-gray-900">{currentChat.name}</h2>
// //                             <p className="text-sm text-gray-600">
// //                                 {currentChat.profession} • {currentChat.subtitle}
// //                             </p>
// //                         </div>
// //                     </div>

// //                     <div className="flex items-center space-x-2">
// //                         <button
// //                             onClick={() => setShowCollaborationModal(true)}
// //                             className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors"
// //                         >
// //                             Send Collaboration Request
// //                         </button>

// //                         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
// //                             <Phone size={20} className="text-gray-600" />
// //                         </button>

// //                         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
// //                             <Video size={20} className="text-gray-600" />
// //                         </button>

// //                         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
// //                             <MoreVertical size={20} className="text-gray-600" />
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Date Separator */}
// //             <div className="flex justify-center py-4">
// //                 <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
// //                     Jan 15
// //                 </div>
// //             </div>

// //             {/* Messages */}
// //             <div className="flex-1 p-4 space-y-4 overflow-y-auto">
// //                 {currentChat.messages.map((msg) => (
// //                     <div
// //                         key={msg.id}
// //                         className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
// //                     >
// //                         <div
// //                             className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${msg.isOwn ? 'flex-row-reverse space-x-reverse' : ''
// //                                 }`}
// //                         >
// //                             {!msg.isOwn && (
// //                                 <img
// //                                     src={msg.avatar}
// //                                     alt="Avatar"
// //                                     className="w-8 h-8 rounded-full object-cover"
// //                                 />
// //                             )}

// //                             <div
// //                                 className={`px-4 py-2 rounded-2xl ${msg.isOwn ? 'bg-orange-500 text-white' : 'bg-orange-400 text-white'
// //                                     }`}
// //                             >
// //                                 <p className="text-sm">{msg.text}</p>
// //                             </div>

// //                             {msg.isOwn && (
// //                                 <img
// //                                     src={msg.avatar}
// //                                     alt="Avatar"
// //                                     className="w-8 h-8 rounded-full object-cover"
// //                                 />
// //                             )}
// //                         </div>
// //                     </div>
// //                 ))}

// //                 {currentChat.messages.map((msg) => (
// //                     <div
// //                         key={`time-${msg.id}`}
// //                         className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
// //                     >
// //                         <span className="text-xs text-gray-400 mt-1">{msg.timestamp}</span>
// //                     </div>
// //                 ))}
// //             </div>

// //             {/* Message Input */}
// //             <div className="p-4 bg-gray-900">
// //                 <div className="flex items-center space-x-3">
// //                     <div className="flex-1 relative">
// //                         <input
// //                             type="text"
// //                             placeholder="Type your message......"
// //                             value={message}
// //                             onChange={(e) => setMessage(e.target.value)}
// //                             onKeyPress={handleKeyPress}
// //                             className="w-full bg-gray-800 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
// //                         />
// //                         <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-700 rounded-full transition-colors">
// //                             <Paperclip size={18} className="text-gray-400" />
// //                         </button>
// //                     </div>

// //                     <button className="p-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors">
// //                         <Mic size={20} className="text-white" />
// //                     </button>

// //                     <button
// //                         onClick={handleSendMessage}
// //                         className="p-3 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
// //                     >
// //                         <Send size={20} className="text-white" />
// //                     </button>
// //                 </div>
// //             </div>

// //             {/* Collaboration Modal */}
// //             <CollaborationModal
// //                 isOpen={showCollaborationModal}
// //                 onClose={() => setShowCollaborationModal(false)}
// //                 recipientName={currentChat.name}
// //             />
// //         </div>
// //     );
// // }

// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, Phone, Video, MoreVertical, Paperclip, Mic, Send } from 'lucide-react';
// import CollaborationModal from './CollaborationModal';
// import { getChatMessages, sendMessage } from '../../../api/client';

// export default function ChatWindow({ chatId, onBack }) {
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState([]);
//     const [chatInfo, setChatInfo] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showCollaborationModal, setShowCollaborationModal] = useState(false);

//     useEffect(() => {
//         if (chatId) {
//             fetchMessages();
//         }
//     }, [chatId]);

//     const fetchMessages = async () => {
//         try {
//             setLoading(true);
//             const response = await getChatMessages(chatId);
//             if (response.data.success) {
//                 setMessages(response.data.data);
//                 // Set chat info from first message or chat data
//                 if (response.data.data.length > 0) {
//                     const otherParticipant = response.data.data[0].sender;
//                     setChatInfo({
//                         name: otherParticipant.name,
//                         avatar: otherParticipant.profilePic || '/default-avatar.png'
//                     });
//                 }
//             }
//         } catch (error) {
//             console.error('Error fetching messages:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSendMessage = async () => {
//         if (!message.trim()) return;

//         try {
//             const response = await sendMessage(chatId, message);
//             if (response.data.success) {
//                 setMessages(prev => [...prev, response.data.data]);
//                 setMessage('');
//             }
//         } catch (error) {
//             console.error('Error sending message:', error);
//         }
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter' && !e.shiftKey) {
//             e.preventDefault();
//             handleSendMessage();
//         }
//     };

//     if (loading) {
//         return (
//             <div className="flex flex-col h-screen bg-gray-900 items-center justify-center">
//                 <div className="text-white">Loading messages...</div>
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-col h-screen bg-gray-900">
//             {/* Header */}
//             <div className="bg-white border-b border-gray-200 p-4">
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                         <button
//                             onClick={onBack}
//                             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                         >
//                             <ArrowLeft size={20} className="text-gray-600" />
//                         </button>

//                         {chatInfo && (
//                             <>
//                                 <img
//                                     src={chatInfo.avatar}
//                                     alt={chatInfo.name}
//                                     className="w-10 h-10 rounded-full object-cover"
//                                 />
//                                 <div>
//                                     <h2 className="font-semibold text-gray-900">{chatInfo.name}</h2>
//                                 </div>
//                             </>
//                         )}
//                     </div>

//                     <div className="flex items-center space-x-2">
//                         <button
//                             onClick={() => setShowCollaborationModal(true)}
//                             className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors"
//                         >
//                             Send Collaboration Request
//                         </button>

//                         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                             <Phone size={20} className="text-gray-600" />
//                         </button>

//                         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                             <Video size={20} className="text-gray-600" />
//                         </button>

//                         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                             <MoreVertical size={20} className="text-gray-600" />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 p-4 space-y-4 overflow-y-auto">
//                 {messages.map((msg) => (
//                     <div
//                         key={msg._id}
//                         className={`flex ${msg.sender._id === 'currentUserId' ? 'justify-end' : 'justify-start'}`}
//                     >
//                         <div
//                             className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${msg.sender._id === 'currentUserId' ? 'flex-row-reverse space-x-reverse' : ''}`}
//                         >
//                             {msg.sender._id !== 'currentUserId' && (
//                                 <img
//                                     src={msg.sender.profilePic || '/default-avatar.png'}
//                                     alt="Avatar"
//                                     className="w-8 h-8 rounded-full object-cover"
//                                 />
//                             )}

//                             <div
//                                 className={`px-4 py-2 rounded-2xl ${msg.sender._id === 'currentUserId' ? 'bg-orange-500 text-white' : 'bg-orange-400 text-white'}`}
//                             >
//                                 <p className="text-sm">{msg.content}</p>
//                             </div>

//                             {msg.sender._id === 'currentUserId' && (
//                                 <img
//                                     src={msg.sender.profilePic || '/default-avatar.png'}
//                                     alt="Avatar"
//                                     className="w-8 h-8 rounded-full object-cover"
//                                 />
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Message Input */}
//             <div className="p-4 bg-gray-900">
//                 <div className="flex items-center space-x-3">
//                     <div className="flex-1 relative">
//                         <input
//                             type="text"
//                             placeholder="Type your message......"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             onKeyPress={handleKeyPress}
//                             className="w-full bg-gray-800 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
//                         />
//                         <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-700 rounded-full transition-colors">
//                             <Paperclip size={18} className="text-gray-400" />
//                         </button>
//                     </div>

//                     <button className="p-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors">
//                         <Mic size={20} className="text-white" />
//                     </button>

//                     <button
//                         onClick={handleSendMessage}
//                         className="p-3 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
//                     >
//                         <Send size={20} className="text-white" />
//                     </button>
//                 </div>
//             </div>

//             {/* Collaboration Modal */}
//             {chatInfo && (
//                 <CollaborationModal
//                     isOpen={showCollaborationModal}
//                     onClose={() => setShowCollaborationModal(false)}
//                     recipientName={chatInfo.name}
//                 />
//             )}
//         </div>
//     );
// }

// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, Phone, Video, MoreVertical, Paperclip, Mic, Send } from 'lucide-react';
// import CollaborationModal from './CollaborationModal';
// import { getChatMessages, sendMessage } from '../../../api/client';

// export default function ChatWindow({ chatId, onBack }) {
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState([]);
//     const [chatInfo, setChatInfo] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showCollaborationModal, setShowCollaborationModal] = useState(false);
//     const [currentUserId, setCurrentUserId] = useState(null);

//     useEffect(() => {
//         // Get current user ID from token or API
//         const getCurrentUserId = async () => {
//             try {
//                 const token = Cookies.get("jwt");
//                 if (token) {
//                     // You can replace this with actual JWT decoding or API logic
//                     setCurrentUserId('currentUserId'); // placeholder for now
//                 }
//             } catch (error) {
//                 console.error('Error getting current user ID:', error);
//             }
//         };

//         getCurrentUserId();
//     }, []);

//     useEffect(() => {
//         if (chatId) {
//             fetchMessages();
//         }
//     }, [chatId]);

//     const fetchMessages = async () => {
//         try {
//             setLoading(true);
//             const response = await getChatMessages(chatId);
//             if (response.data.success) {
//                 setMessages(response.data.data);

//                 if (response.data.data.length > 0) {
//                     const otherParticipant = response.data.data[0].sender;
//                     setChatInfo({
//                         name: otherParticipant.name,
//                         avatar: otherParticipant.profilePic || '/default-avatar.png'
//                     });
//                 }
//             }
//         } catch (error) {
//             console.error('Error fetching messages:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSendMessage = async () => {
//         if (!message.trim()) return;

//         try {
//             const response = await sendMessage(chatId, message);
//             if (response.data.success) {
//                 setMessages(prev => [...prev, response.data.data]);
//                 setMessage('');
//             }
//         } catch (error) {
//             console.error('Error sending message:', error);
//         }
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter' && !e.shiftKey) {
//             e.preventDefault();
//             handleSendMessage();
//         }
//     };

//     if (loading) {
//         return (
//             <div className="flex flex-col h-screen bg-gray-900 items-center justify-center">
//                 <div className="text-white">Loading messages...</div>
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-col h-screen bg-gray-900">
//             {/* Header */}
//             <div className="bg-white border-b border-gray-200 p-4">
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                         <button
//                             onClick={onBack}
//                             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                         >
//                             <ArrowLeft size={20} className="text-gray-600" />
//                         </button>

//                         {chatInfo && (
//                             <>
//                                 <img
//                                     src={chatInfo.avatar}
//                                     alt={chatInfo.name}
//                                     className="w-10 h-10 rounded-full object-cover"
//                                 />
//                                 <div>
//                                     <h2 className="font-semibold text-gray-900">{chatInfo.name}</h2>
//                                 </div>
//                             </>
//                         )}
//                     </div>

//                     <div className="flex items-center space-x-2">
//                         <button
//                             onClick={() => setShowCollaborationModal(true)}
//                             className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors"
//                         >
//                             Send Collaboration Request
//                         </button>

//                         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                             <Phone size={20} className="text-gray-600" />
//                         </button>

//                         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                             <Video size={20} className="text-gray-600" />
//                         </button>

//                         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                             <MoreVertical size={20} className="text-gray-600" />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 p-4 space-y-4 overflow-y-auto">
//                 {messages.map((msg) => (
//                     <div
//                         key={msg._id}
//                         className={`flex ${msg.sender._id === currentUserId ? 'justify-end' : 'justify-start'}`}
//                     >
//                         <div
//                             className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${msg.sender._id === currentUserId ? 'flex-row-reverse space-x-reverse' : ''}`}
//                         >
//                             {msg.sender._id !== currentUserId && (
//                                 <img
//                                     src={msg.sender.profilePic || '/default-avatar.png'}
//                                     alt="Avatar"
//                                     className="w-8 h-8 rounded-full object-cover"
//                                 />
//                             )}

//                             <div
//                                 className={`px-4 py-2 rounded-2xl ${msg.sender._id === currentUserId ? 'bg-orange-500 text-white' : 'bg-orange-400 text-white'}`}
//                             >
//                                 <p className="text-sm">{msg.content}</p>
//                             </div>

//                             {msg.sender._id === currentUserId && (
//                                 <img
//                                     src={msg.sender.profilePic || '/default-avatar.png'}
//                                     alt="Avatar"
//                                     className="w-8 h-8 rounded-full object-cover"
//                                 />
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Message Input */}
//             <div className="p-4 bg-gray-900">
//                 <div className="flex items-center space-x-3">
//                     <div className="flex-1 relative">
//                         <input
//                             type="text"
//                             placeholder="Type your message......"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             onKeyPress={handleKeyPress}
//                             className="w-full bg-gray-800 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
//                         />
//                         <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-700 rounded-full transition-colors">
//                             <Paperclip size={18} className="text-gray-400" />
//                         </button>
//                     </div>

//                     <button className="p-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors">
//                         <Mic size={20} className="text-white" />
//                     </button>

//                     <button
//                         onClick={handleSendMessage}
//                         className="p-3 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
//                     >
//                         <Send size={20} className="text-white" />
//                     </button>
//                 </div>
//             </div>

//             {/* Collaboration Modal */}
//             {chatInfo && (
//                 <CollaborationModal
//                     isOpen={showCollaborationModal}
//                     onClose={() => setShowCollaborationModal(false)}
//                     recipientName={chatInfo.name}
//                 />
//             )}
//         </div>
//     );
// }

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Mic,
  Send,
  Play,
  StopCircle,
} from "lucide-react";
import CollaborationModal from "./CollaborationModal";
import { getChatMessages, sendMessage } from "../../../api/client";
import io from "socket.io-client";
import ReactAudioPlayer from "react-audio-player";
import Cookies from "js-cookie";

export default function ChatWindow({ chatId, onBack }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatInfo, setChatInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCollaborationModal, setShowCollaborationModal] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);
  // console.log("ChatID: ", chatId);

  // Initialize WebSocket connection
  useEffect(() => {
    // Get JWT token from cookie
    const token = Cookies.get("jwt");

    if (token) {
  const backendURL =
    import.meta.env.VITE_BACKEND_URL?.trim() ||
    "https://collabreen-backend.onrender.com";

  socketRef.current = io(backendURL, {
    auth: { token },
    transports: ["websocket", "polling"], // allow fallback for Render
    reconnection: true,                    // auto-reconnect if lost
    reconnectionAttempts: 5,               // retry 5 times
    reconnectionDelay: 2000,               // wait 2s between retries
    timeout: 20000,                        // fail fast on long delay
  });

  socketRef.current.on("connect", () => {
    console.log("WebSocket connected:", socketRef.current.id);
  });

  socketRef.current.on("disconnect", (reason) => {
    console.warn("WebSocket disconnected:", reason);
  });

  socketRef.current.on("connect_error", (err) => {
    console.error("WebSocket connection error:", err.message);
  });
}


      // Connection established
      socketRef.current.on("connect", () => {
        console.log("WebSocket connected:", socketRef.current.id);
      });

      // Listen for incoming messages
      socketRef.current.on("receiveMessage", (newMessage) => {
        // Only add message if it belongs to current chat
        if (newMessage.chat === chatId) {
          setMessages((prev) => [...prev, newMessage]);
          scrollToBottom();
        }
      });

      // Listen for message sent confirmation
      socketRef.current.on("messageSent", (sentMessage) => {
        console.log("Message sent confirmation:", sentMessage);
      });

      // Handle connection errors
      socketRef.current.on("connect_error", (error) => {
        console.error("WebSocket connection error:", error);
      });

      // Handle disconnection
      socketRef.current.on("disconnect", (reason) => {
        console.log("WebSocket disconnected:", reason);
      });

      // Cleanup on unmount
      return () => {
        if (socketRef.current) {
          socketRef.current.disconnect();
        }
      };
    }
  }, [chatId]);

  // Join chat room when chatId changes
  useEffect(() => {
    if (socketRef.current && chatId) {
      socketRef.current.emit("joinChat", chatId);
      console.log("Joined chat room:", chatId);
    }

    return () => {
      if (socketRef.current && chatId) {
        socketRef.current.emit("leaveChat", chatId);
        console.log("Left chat room:", chatId);
      }
    };
  }, [chatId]);

  useEffect(() => {
    // Get current user ID from token or API
    const getCurrentUserId = async () => {
      try {
        const token = Cookies.get("jwt");
        if (token) {
          const userRaw = Cookies.get("user");
          const userId = JSON.parse(userRaw).id;

          // You can replace this with actual JWT decoding or API logic
          setCurrentUserId(userId); // placeholder for now
        }
      } catch (error) {
        console.error("Error getting current user ID:", error);
      }
    };

    getCurrentUserId();
  }, []);

  useEffect(() => {
    if (chatId) {
      fetchMessages();
    }
  }, [chatId]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
    console.log(messages);
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await getChatMessages(chatId);
      if (response.data.success) {
        setMessages(response.data.data);
        console.log("Fetched messages:", response.data.data);

        if (response.data.data.length > 0) {
          const otherParticipant = response.data.data[0].sender;
          setChatInfo({
            id: otherParticipant._id,
            name: otherParticipant.name,
            avatar: otherParticipant.profilePic || "/default-avatar.png",
          });
        }
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleMicClick = async () => {
    if (isRecording) {
      // Stop recording
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    } else {
      // Request mic access
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
          setAudioBlob(blob);
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch (error) {
        console.error("Mic access denied:", error);
        alert("Microphone access is required to send voice messages.");
      }
    }
  };

  const handleSendAudio = async () => {
    if (!audioBlob) return;

    try {
      const formData = new FormData();
      formData.append("audio", audioBlob, "voiceMessage.webm");
      formData.append("chatId", chatId);

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/chats/${chatId}/send-audio`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
          body: formData,
        }
      );

      const data = await response.json();
      console.log("Audio message sent response:", data.data.audioUrl);

      if (data.success) {
        setMessages((prev) => [...prev, data.data]);
        setAudioBlob(null);

        // also send via socket for real-time
        if (socketRef.current) {
          socketRef.current.emit("sendMessage", {
            chatId,
            messageType: "audio",
            audioUrl: data.data.audioUrl, // backend should return URL
          });
        }
      } else {
        console.error("Audio upload failed:", data);
      }
    } catch (error) {
      console.error("Error sending audio:", error);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const messageContent = message.trim();
    setMessage(""); // Clear input immediately

    try {
      // Send via WebSocket
      if (socketRef.current && socketRef.current.connected) {
        socketRef.current.emit("sendMessage", {
          chatId: chatId,
          content: messageContent,
        });

        // Only reload messages if chatInfo is not yet set
        if (!chatInfo) {
          await fetchMessages();
        }
      } else {
        // Fallback to REST API
        const response = await sendMessage(chatId, messageContent);
        if (response.data.success) {
          setMessages((prev) => [...prev, response.data.data]);
          if (!chatInfo) {
            await fetchMessages();
          }
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessage(messageContent); // restore on error
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col h-screen bg-gray-900 items-center justify-center">
        <div className="text-white">Loading messages...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-white border-b md:mt-16 mt-24 border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </button>

            {chatInfo && (
              <>
                <img
                  src={chatInfo.avatar}
                  alt={chatInfo.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="hidden sm:block">
                  <h2 className="font-semibold text-gray-900">
                    {chatInfo.name}
                  </h2>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center space-x-2">
            {/* <button
                        onClick={() => setShowCollaborationModal(true)}
                        className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors"
                    >
                        Send Collaboration Request
                    </button> */}
            <button
              onClick={() => {
                if (messages.length === 0) {
                  alert(
                    "Please have some conversation first before sending a collaboration request."
                  );
                  return;
                }
                setShowCollaborationModal(true);
              }}
              className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors"
            >
              Send Collaboration Request
            </button>

            {/* <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Phone size={20} className="text-gray-600" />
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Video size={20} className="text-gray-600" />
            </button> */}

            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <MoreVertical size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className={`flex ${
              msg.sender._id === currentUserId ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex flex-col items-${
                msg.sender._id === currentUserId ? "end" : "start"
              } space-y-1 max-w-[80%] sm:max-w-md`}
            >
              {/* Avatar and bubble */}
              <div
                className={`flex items-end space-x-2 ${
                  msg.sender._id === currentUserId
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                <img
                  src={msg.sender.profilePic || "/default-avatar.png"}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />

                <div
                  className={`px-3 py-2 rounded-2xl text-sm sm:text-base ${
                    msg.sender._id === currentUserId
                      ? "bg-orange-500 text-white"
                      : "bg-orange-400 text-white"
                  }`}
                >
                  {msg.messageType === "audio" ? (
                    <div className="w-[180px] sm:w-[240px]">
                      <ReactAudioPlayer
                        src={msg.audioUrl}
                        controls
                        className="w-full rounded-md"
                      />
                    </div>
                  ) : (
                    <p>{msg.content}</p>
                  )}
                </div>
              </div>

              {/* Sender name visible on mobile */}
              <p className="text-xs text-gray-400 sm:hidden px-2">
                {msg.sender._id === currentUserId ? "You" : msg.sender.name}
              </p>
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 bg-gray-900">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-sm sm:text-base"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-700 rounded-full transition-colors">
              <Paperclip size={18} className="text-gray-400" />
            </button>
          </div>

          {/* Mic button */}
          <button
            onClick={handleMicClick}
            className={`p-3 rounded-full transition-colors ${
              isRecording
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isRecording ? (
              <StopCircle size={20} className="text-white" />
            ) : (
              <Mic size={20} className="text-white" />
            )}
          </button>

          {/* Show send audio button if recorded */}
          {audioBlob && (
            <button
              onClick={handleSendAudio}
              className="p-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
            >
              <Play size={20} className="text-white" />
            </button>
          )}

          <button
            onClick={handleSendMessage}
            className="p-3 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
          >
            <Send size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Collaboration Modal */}
      {chatInfo && (
        <CollaborationModal
          isOpen={showCollaborationModal}
          onClose={() => setShowCollaborationModal(false)}
          recipientName={chatInfo.name || " "}
          chatId={chatId || " "}
        />
      )}
    </div>
  );
}
