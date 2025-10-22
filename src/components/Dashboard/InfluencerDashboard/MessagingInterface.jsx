// import React, { useState } from 'react';
// import { Search, Star, Paperclip, Send, Smile } from 'lucide-react';
// import { CiUser } from 'react-icons/ci';

// const MessagingInterface = () => {
//   const [message, setMessage] = useState('');

//   const conversations = [
//     {
//       id: 1,
//       company: 'FashionCo',
//       subject: 'Summer Collection Launch',
//       preview: 'Great! The Content looks p....',
//       time: '2 hours ago',
//       starred: true,
//       avatar: '👗',
//       bgColor: 'bg-green-600'
//     },
//     {
//       id: 2,
//       company: 'TechFlow',
//       subject: 'Smart Home Device Review',
//       preview: 'You: Perfect I\'ll have the re.....',
//       time: '2 hours ago',
//       starred: false,
//       avatar: '💻',
//       bgColor: 'bg-blue-600'
//     },
//     {
//       id: 3,
//       company: 'FitLife',
//       subject: '30 days Fitness Challenge',
//       preview: 'Your challenge content has....',
//       time: '2 hours ago',
//       starred: false,
//       avatar: '💪',
//       bgColor: 'bg-gray-700'
//     }
//   ];

//   return (
//     <div className="flex h-screen bg-gray-900 text-white">
//       {/* Left Sidebar */}
//       <div className="w-full md:w-96 bg-[#1c1c1c] border-r border-gray-700 flex flex-col">
//         {/* Header */}
//         <div className="p-4 border-b border-gray-700">
//           <div className="flex items-center justify-between mb-4">
//             <h1 className="text-xl font-semibold">Inbox/Message</h1>
//             <span className="bg-orange-500 text-xs px-2 py-1 rounded-full">0 new</span>
//           </div>

//           {/* Search */}
//           <div className="relative">
//             <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search Conversations"
//               className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//           </div>
//         </div>

//         {/* Filter Tabs */}
//         <div className="flex border-b border-gray-700">
//           <button className="flex-1 bg-orange-500 text-white py-3 text-sm font-medium">
//             All
//           </button>
//           <button className="flex-1 text-gray-400 hover:text-white py-3 text-sm font-medium">
//             Unread
//           </button>
//           <button className="flex-1 text-gray-400 hover:text-white py-3 text-sm font-medium">
//             Starred
//           </button>
//         </div>

//         {/* Conversations List */}
//         <div className="flex-1 overflow-y-auto">
//           {conversations.map((conv) => (
//             <div key={conv.id} className={`p-4 border-b border-gray-700 hover:bg-gray-700 cursor-pointer ${conv.id === 1 ? 'bg-gray-700' : ''}`}>
//               <div className="flex items-start space-x-3">
//                 <div className={`w-12 h-12 ${conv.bgColor} rounded-lg flex items-center justify-center text-lg`}>
//                   {conv.avatar}
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center justify-between mb-1">
//                     <h3 className="font-semibold text-sm truncate">{conv.company}</h3>
//                     <div className="flex items-center space-x-2">
//                       {conv.starred && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
//                       <span className="text-xs text-gray-400">{conv.time}</span>
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-300 mb-1">{conv.subject}</p>
//                   <p className="text-xs text-gray-400 truncate">{conv.preview}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Chat Area - Hidden on mobile when sidebar is visible */}
//       <div className="hidden md:flex flex-1 flex-col">
//         {/* Chat Header */}
//         <div className="bg-green-600 p-4 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg">
//               👗
//             </div>
//             <div>
//               <h2 className="font-semibold">FashionCo</h2>
//               <p className="text-sm text-green-100">Summer collection Launch</p>
//             </div>
//           </div>
//           <button className="text-white hover:bg-green-700 px-3 py-1 rounded text-sm">
//             📊 View Campaign
//           </button>
//         </div>

//         {/* Messages Area */}
//         <div className="flex-1 p-4 overflow-y-auto space-y-4">
//           <div className="text-center">
//             <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">September 1, 2025</span>
//           </div>

//           {/* Your message */}
//           <div className="flex justify-end">
//             <div className="max-w-xs lg:max-w-md">
//               <div className="bg-orange-500 text-white p-3 rounded-lg">
//                 <p className="text-sm">Hi Sarah! I've completed the first round of content for the summer collection. Here are some preview shots.</p>
//               </div>
//               <div className="mt-2">
//                 {/* <img
//                   src="/api/placeholder/300/200"
//                   alt="Summer collection preview"
//                   className="rounded-lg w-full"
//                 /> */}
//                 <CiUser className="text-xl text-[#84868B]" />
//               </div>
//               <div className="text-right mt-1">
//                 <span className="text-xs text-gray-400">10:15 AM</span>
//                 <span className="text-xs text-gray-400 ml-2">Read</span>
//               </div>
//             </div>
//           </div>

//           {/* Sarah's message */}
//           <div className="flex items-start space-x-3">
//             <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm">
//               👤
//             </div>
//             <div className="max-w-xs lg:max-w-md">
//               <div className="flex items-center space-x-2 mb-1">
//                 <span className="text-sm font-medium">Sarah Wilson</span>
//                 <span className="text-xs text-gray-400">2:30 PM</span>
//               </div>
//               <div className="bg-orange-500 text-white p-3 rounded-lg">
//                 <p className="text-sm">Great! The content looks perfect. Can you also include some lifestyle shots?</p>
//               </div>
//               <div className="mt-1">
//                 <span className="text-xs text-gray-400">10:16 AM</span>
//                 <span className="text-xs text-gray-400 ml-2">Read</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Message Input */}
//         <div className="p-4 border-t border-gray-700">
//           <div className="flex items-center space-x-3">
//             <div className="flex-1 relative">
//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Type your message......"
//                 className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//               <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
//                 <Smile className="w-5 h-5" />
//               </button>
//             </div>
//             <button className="text-gray-400 hover:text-white p-3">
//               <Paperclip className="w-5 h-5" />
//             </button>
//             <button className="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg">
//               <Send className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Chat View - Shows when a conversation is selected */}
//       <div className="md:hidden flex-1 flex-col" style={{ display: 'none' }}>
//         {/* This would be shown when a conversation is selected on mobile */}
//       </div>
//     </div>
//   );
// };

// export default MessagingInterface;


import React, { useState, useRef, useEffect } from 'react';
import { Search, Star, Paperclip, Send, Smile, X, Image, File, ArrowLeft } from 'lucide-react';

const MessagingInterface = () => {
  // State management for backend integration
  const [conversations, setConversations] = useState([
    {
      id: 1,
      company: 'FashionCo',
      subject: 'Summer Collection Launch',
      preview: 'Great! The Content looks p....',
      time: '2 hours ago',
      starred: true,
      avatar: '👗',
      bgColor: 'bg-green-600',
      unread: false,
      messages: [
        {
          id: 1,
          senderId: 'user',
          senderName: 'You',
          content: "Hi Sarah! I've completed the first round of content for the summer collection. Here are some preview shots.",
          timestamp: '10:15 AM',
          read: true,
          attachments: [
            { type: 'image', url: '/api/placeholder/300/200', name: 'summer-collection.jpg' }
          ]
        },
        {
          id: 2,
          senderId: 'sarah_wilson',
          senderName: 'Sarah Wilson',
          content: 'Great! The content looks perfect. Can you also include some lifestyle shots?',
          timestamp: '10:16 AM',
          read: true,
          attachments: []
        }
      ]
    },
    {
      id: 2,
      company: 'TechFlow',
      subject: 'Smart Home Device Review',
      preview: 'You: Perfect I\'ll have the re.....',
      time: '2 hours ago',
      starred: false,
      avatar: '💻',
      bgColor: 'bg-blue-600',
      unread: true,
      messages: [
        {
          id: 1,
          senderId: 'user',
          senderName: 'You',
          content: "Perfect I'll have the review ready by tomorrow.",
          timestamp: '9:30 AM',
          read: true,
          attachments: []
        }
      ]
    },
    {
      id: 3,
      company: 'FitLife',
      subject: '30 days Fitness Challenge',
      preview: 'Your challenge content has....',
      time: '2 hours ago',
      starred: false,
      avatar: '💪',
      bgColor: 'bg-gray-700',
      unread: false,
      messages: [
        {
          id: 1,
          senderId: 'fitlife_team',
          senderName: 'FitLife Team',
          content: 'Your challenge content has been approved. Ready to launch!',
          timestamp: '8:45 AM',
          read: true,
          attachments: []
        }
      ]
    }
  ]);

  const [activeConversation, setActiveConversation] = useState(1);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSidebar, setShowSidebar] = useState(true);

  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setShowSidebar(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversations, activeConversation]);

  // API Integration Functions (ready for backend)
  const apiClient = {
    // GET /api/conversations
    fetchConversations: async (filter = 'all', search = '') => {
      // Simulate API call
      console.log('API: Fetching conversations', { filter, search });
      // return await fetch('/api/conversations', { params: { filter, search } });
    },

    // POST /api/conversations/:id/messages
    sendMessage: async (conversationId, messageData) => {
      console.log('API: Sending message', { conversationId, messageData });
      // return await fetch(`/api/conversations/${conversationId}/messages`, {
      //   method: 'POST',
      //   body: JSON.stringify(messageData)
      // });
    },

    // PUT /api/conversations/:id/star
    toggleStar: async (conversationId, starred) => {
      console.log('API: Toggle star', { conversationId, starred });
      // return await fetch(`/api/conversations/${conversationId}/star`, {
      //   method: 'PUT',
      //   body: JSON.stringify({ starred })
      // });
    },

    // POST /api/upload
    uploadFile: async (file) => {
      console.log('API: Uploading file', file.name);
      // const formData = new FormData();
      // formData.append('file', file);
      // return await fetch('/api/upload', { method: 'POST', body: formData });
    },

    // PUT /api/conversations/:id/read
    markAsRead: async (conversationId) => {
      console.log('API: Mark as read', conversationId);
      // return await fetch(`/api/conversations/${conversationId}/read`, { method: 'PUT' });
    }
  };

  // Filter conversations based on current filter and search
  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.subject.toLowerCase().includes(searchQuery.toLowerCase());

    switch (currentFilter) {
      case 'unread':
        return matchesSearch && conv.unread;
      case 'starred':
        return matchesSearch && conv.starred;
      default:
        return matchesSearch;
    }
  });

  // Get unread count
  const unreadCount = conversations.filter(conv => conv.unread).length;

  // Get active conversation
  const getCurrentConversation = () => {
    return conversations.find(conv => conv.id === activeConversation);
  };

  // Handle conversation selection
  const handleSelectConversation = async (conversationId) => {
    setActiveConversation(conversationId);

    // Mark as read
    await apiClient.markAsRead(conversationId);

    setConversations(prev => prev.map(conv =>
      conv.id === conversationId
        ? { ...conv, unread: false }
        : conv
    ));

    if (isMobile) {
      setShowSidebar(false);
    }
  };

  // Handle star toggle
  const handleToggleStar = async (conversationId, e) => {
    e.stopPropagation();

    const conversation = conversations.find(conv => conv.id === conversationId);
    const newStarred = !conversation.starred;

    await apiClient.toggleStar(conversationId, newStarred);

    setConversations(prev => prev.map(conv =>
      conv.id === conversationId
        ? { ...conv, starred: newStarred }
        : conv
    ));
  };

  // Handle sending message
  const handleSendMessage = async () => {
    if (!message.trim() && attachments.length === 0) return;

    const newMessage = {
      id: Date.now(),
      senderId: 'user',
      senderName: 'You',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: false,
      attachments: [...attachments]
    };

    // Send to API
    await apiClient.sendMessage(activeConversation, {
      content: message,
      attachments: attachments.map(att => att.id)
    });

    // Update local state
    setConversations(prev => prev.map(conv =>
      conv.id === activeConversation
        ? {
          ...conv,
          messages: [...conv.messages, newMessage],
          preview: message || `${attachments.length} attachment${attachments.length !== 1 ? 's' : ''}`,
          time: 'now'
        }
        : conv
    ));

    setMessage('');
    setAttachments([]);
    setShowEmojiPicker(false);
  };

  // Handle file attachment
  const handleFileAttachment = async (e) => {
    const files = Array.from(e.target.files);

    for (const file of files) {
      // Upload file to server
      const uploadedFile = await apiClient.uploadFile(file);

      const attachment = {
        id: Date.now() + Math.random(),
        type: file.type.startsWith('image/') ? 'image' : 'file',
        url: URL.createObjectURL(file), // In real app, use server URL
        name: file.name,
        size: file.size
      };

      setAttachments(prev => [...prev, attachment]);
    }
  };

  // Handle search
  const handleSearch = async (query) => {
    setSearchQuery(query);
    await apiClient.fetchConversations(currentFilter, query);
  };

  // Handle filter change
  const handleFilterChange = async (filter) => {
    setCurrentFilter(filter);
    await apiClient.fetchConversations(filter, searchQuery);
  };

  // Emoji picker (simplified)
  const emojis = ['😀', '😂', '😍', '🤔', '👍', '👎', '❤️', '🎉', '🔥', '💯'];

  const handleEmojiSelect = (emoji) => {
    setMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  // Remove attachment
  const removeAttachment = (attachmentId) => {
    setAttachments(prev => prev.filter(att => att.id !== attachmentId));
  };

  const currentConv = getCurrentConversation();

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Left Sidebar */}
      {(!isMobile || showSidebar) && (
        <div className="w-full md:w-96 bg-[#1c1c1c] border-r border-gray-700 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold">Inbox/Message</h1>
              <span className="bg-orange-500 text-xs px-2 py-1 rounded-full">
                {unreadCount} new
              </span>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Conversations"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex border-b border-gray-700">
            {['all', 'unread', 'starred'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`flex-1 py-3 text-sm font-medium capitalize transition-colors ${currentFilter === filter
                    ? 'bg-orange-500 rounded-xl m-4 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700 rounded-xl m-4'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => handleSelectConversation(conv.id)}
                className={`p-4 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition-colors ${conv.id === activeConversation ? 'bg-gray-700' : ''
                  } ${conv.unread ? 'border-l-4 border-l-orange-500' : ''}`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-12 h-12 ${conv.bgColor} rounded-lg flex items-center justify-center text-lg flex-shrink-0`}>
                    {conv.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`text-sm truncate ${conv.unread ? 'font-bold' : 'font-semibold'}`}>
                        {conv.company}
                      </h3>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <button
                          onClick={(e) => handleToggleStar(conv.id, e)}
                          className="hover:scale-110 transition-transform"
                        >
                          <Star className={`w-4 h-4 ${conv.starred ? 'text-yellow-500 fill-current' : 'text-gray-400'}`} />
                        </button>
                        <span className="text-xs text-gray-400">{conv.time}</span>
                      </div>
                    </div>
                    <p className={`text-sm mb-1 ${conv.unread ? 'text-white' : 'text-gray-300'}`}>
                      {conv.subject}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{conv.preview}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Chat Area */}
      {(!isMobile || !showSidebar) && currentConv && (
        <div className="flex-1 flex flex-col bg-[#09090c]">
          {/* Chat Header */}
          <div className={`bg-[#93B076] p-4 flex items-center justify-between`}>
            <div className="flex items-center space-x-3">
              {isMobile && (
                <button
                  onClick={() => setShowSidebar(true)}
                  className="text-white hover:bg-black hover:bg-opacity-20 p-2 rounded-lg -ml-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg`}>
                {currentConv.avatar}
              </div>
              <div>
                <h2 className="font-semibold">{currentConv.company}</h2>
                <p className="text-sm opacity-90">{currentConv.subject}</p>
              </div>
            </div>
            <button className="text-white hover:bg-black hover:bg-opacity-20 px-3 py-1 rounded text-sm transition-colors">
              📊 View Campaign
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#09090c]">
            <div className="text-center">
              <span className="bg-gray-600 px-3 py-1 rounded-full text-xs">September 1, 2025</span>
            </div>

            {currentConv.messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.senderId === 'user' ? 'justify-end' : 'items-start space-x-3'}`}>
                {msg.senderId !== 'user' && (
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    👤
                  </div>
                )}

                <div className={`max-w-xs lg:max-w-md ${msg.senderId === 'user' ? 'ml-auto' : ''}`}>
                  {msg.senderId !== 'user' && (
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium">{msg.senderName}</span>
                      <span className="text-xs text-gray-400">2:30 PM</span>
                    </div>
                  )}

                  {msg.content && (
                    <div className="bg-orange-500 text-white p-3 rounded-lg">
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  )}

                  {msg.attachments.map((att, idx) => (
                    <div key={idx} className="mt-2">
                      {att.type === 'image' ? (
                        <img
                          src={att.url}
                          alt={att.name}
                          className="rounded-lg w-full cursor-pointer hover:opacity-90 transition-opacity"
                        />
                      ) : (
                        <div className="bg-gray-700 p-3 rounded-lg flex items-center space-x-2">
                          <File className="w-4 h-4" />
                          <span className="text-sm">{att.name}</span>
                        </div>
                      )}
                    </div>
                  ))}

                  <div className={`mt-1 ${msg.senderId === 'user' ? 'text-right' : ''}`}>
                    <span className="text-xs text-gray-400">{msg.timestamp}</span>
                    {msg.senderId === 'user' && (
                      <span className="text-xs text-gray-400 ml-2">
                        {msg.read ? 'Read' : 'Sent'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Attachments Preview */}
          {attachments.length > 0 && (
            <div className="p-4 border-t border-gray-700 bg-gray-800">
              <div className="flex flex-wrap gap-2">
                {attachments.map((att) => (
                  <div key={att.id} className="relative bg-gray-700 p-2 rounded-lg flex items-center space-x-2">
                    {att.type === 'image' ? <Image className="w-4 h-4" /> : <File className="w-4 h-4" />}
                    <span className="text-xs">{att.name}</span>
                    <button
                      onClick={() => removeAttachment(att.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Emoji Picker */}
          {showEmojiPicker && (
            <div className="absolute bottom-20 right-20 bg-gray-800 border border-gray-600 rounded-lg p-3 grid grid-cols-5 gap-2 shadow-lg">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => handleEmojiSelect(emoji)}
                  className="hover:bg-gray-700 p-2 rounded text-lg"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}

          {/* Message Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-end space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message......"
                  className="w-full bg-[#09090c] border border-[#F5ADB2] rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
                <button
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <Smile className="w-5 h-5" />
                </button>
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileAttachment}
                multiple
                accept="image/*,application/pdf,.doc,.docx"
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-gray-400 hover:text-white p-3 transition-colors"
              >
                <Paperclip className="w-5 h-5" />
              </button>

              <button
                onClick={handleSendMessage}
                disabled={!message.trim() && attachments.length === 0}
                className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Empty state for mobile when no conversation selected */}
      {isMobile && !showSidebar && !currentConv && (
        <div className="flex-1 flex items-center justify-center text-gray-400">
          <p>Select a conversation to start messaging</p>
        </div>
      )}
    </div>
  );
};

export default MessagingInterface;