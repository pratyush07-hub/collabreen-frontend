import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, Paperclip, Mic, Send } from "lucide-react";
import {
  getGroupMessages,
  sendGroupMessage,
  getGroupById,
} from "../../../api/client";
import io from "socket.io-client";
import Cookies from "js-cookie";
import { Phone, Video, MoreVertical } from "lucide-react";
import {
  deleteGroupMessageForMe,
  deleteGroupMessageForEveryone,
} from "../../../api/client";

export default function GroupChatWindow({ groupId, currentUser, onBack }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [groupInfo, setGroupInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [typingUsers, setTypingUsers] = useState([]);

  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Initialize socket connection
  useEffect(() => {
    const token = Cookies.get("jwt");
    if (!token) return;

    const backendURL =
      import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
    socketRef.current = io(backendURL, {
      auth: { token },
      transports: ["websocket", "polling"],
    });

    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log("Connected to socket:", socket.id);
      socket.emit("joinGroupChat", groupId);
    });

    socket.on("receiveGroupMessage", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
      scrollToBottom();
    });

    socket.on("userTypingGroup", ({ userId, isTyping }) => {
      setTypingUsers((prev) => {
        if (isTyping && !prev.includes(userId)) return [...prev, userId];
        if (!isTyping && prev.includes(userId))
          return prev.filter((id) => id !== userId);
        return prev;
      });
    });

    // Define the handler once
    const handleGroupMessageDeleted = ({ messageId }) => {
      console.log("Deleting message:", messageId);
      setMessages((prev) => prev.filter((m) => m._id !== messageId));
    };

    socket.on("groupMessageDeleted", handleGroupMessageDeleted);

    // Proper cleanup
    return () => {
      if (socket) {
        socket.off("groupMessageDeleted", handleGroupMessageDeleted);
        socket.emit("leaveGroupChat", groupId);
        socket.disconnect();
        console.log("Disconnected socket for group:", groupId);
      }
    };
  }, [groupId]);

  // Fetch messages + group info
  useEffect(() => {
    fetchGroupAndMessages();
  }, [groupId]);

  const fetchGroupAndMessages = async () => {
    try {
      setLoading(true);
      const [groupRes, msgRes] = await Promise.all([
        getGroupById(groupId),
        getGroupMessages(groupId),
      ]);
      console.log("Group data response:", groupRes);
      console.log("Messages data response:", msgRes);

      if (groupRes.data.success) {
        setGroupInfo(groupRes.data.group || groupRes.data.data);
      }

      if (msgRes.data.success) {
        setMessages(msgRes.data.data || []); // Make sure you use the 'data' field
      }

      console.log("Fetched messages:", msgRes.data.data);
    } catch (err) {
      console.error("Failed to fetch group data:", err);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    const msgContent = message.trim();
    console.log("Attempting to send message:", msgContent);
    setMessage("");

    try {
      if (socketRef.current && socketRef.current.connected) {
        console.log("Sending message via socket:", {
          groupId,
          content: msgContent,
        });
        socketRef.current.emit("sendGroupMessage", {
          groupId,
          content: msgContent,
        });
      } else {
        console.log("Sending message via API:", {
          groupId,
          content: msgContent,
        });
        const res = await sendGroupMessage(groupId, msgContent);
        console.log("Sent message response:", res);
        if (res.data.success) setMessages((prev) => [...prev, res.data.data]);
      }
    } catch (err) {
      console.error("Failed to send message:", err);
      setMessage(msgContent); // restore input if error
    }
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    console.log("User typing:", e.target.value);
    if (socketRef.current) {
      socketRef.current.emit("typingGroup", {
        groupId,
        isTyping: e.target.value.length > 0,
      });
    }
  };
  const handleDeleteForMe = async (messageId) => {
    try {
      await deleteGroupMessageForMe(messageId);
      setMessages((prev) => prev.filter((m) => m._id !== messageId));
    } catch (err) {
      console.error("Error deleting for me:", err);
    }
  };

  const handleDeleteForEveryone = async (messageId) => {
    try {
      await deleteGroupMessageForEveryone(messageId);
      setMessages((prev) =>
        prev.map((m) =>
          m._id === messageId
            ? {
                ...m,
                isDeletedForEveryone: true,
                content: "🚫 This message was deleted",
              }
            : m
        )
      );
    } catch (err) {
      console.error("Error deleting for everyone:", err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center text-white">
        Loading messages...
      </div>
    );

  return (
    <div className="flex-1 flex flex-col h-[90vh] bg-gray-900 fixed top-[10vh] md:left-[16%] right-0">
      {/* Header (10vh equivalent space handled above) */}
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          {groupInfo && (
            <>
              <img
                src={groupInfo.image || "/default-group.png"}
                alt={groupInfo.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <h2 className="font-semibold text-gray-900">{groupInfo.name}</h2>
            </>
          )}
        </div>

        <div className="flex items-center space-x-2">
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

      {/* Messages Section (scrollable only) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
        {messages.map((msg) => (
  <div
    key={msg._id}
    className={`flex ${
      msg.sender._id === currentUser?._id ? "justify-end" : "justify-start"
    } mb-3`}
  >
    <div
      className={`flex flex-col items-${
        msg.sender._id === currentUser?._id ? "end" : "start"
      } max-w-xs sm:max-w-sm md:max-w-md`}
    >
      {/* Avatar + Message Bubble */}
      <div
        className={`flex items-end space-x-2 ${
          msg.sender._id === currentUser?._id
            ? "flex-row-reverse space-x-reverse"
            : ""
        }`}
      >
        {/* Avatar */}
        <img
          src={msg.sender.profilePic || "/default-avatar.png"}
          alt="Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />

        {/* Message bubble */}
        <div
          className={`px-4 py-2 rounded-2xl text-sm sm:text-base break-words ${
            msg.sender._id === currentUser?._id
              ? "bg-orange-500 text-white"
              : "bg-orange-400 text-white"
          }`}
        >
          <p>
            {msg.isDeletedForEveryone
              ? "🚫 This message was deleted"
              : msg.content}
          </p>
        </div>
      </div>

      {/* ↓ Delete buttons below message */}
      {!msg.isDeletedForEveryone && (
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => handleDeleteForMe(msg._id)}
            className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded"
          >
            Delete for Me
          </button>

          {msg.sender._id === currentUser?._id && (
            <button
              onClick={() => handleDeleteForEveryone(msg._id)}
              className="text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded"
            >
              Delete for Everyone
            </button>
          )}
        </div>
      )}
    </div>
  </div>
))}


        {typingUsers.length > 0 && (
          <p className="text-gray-400 text-sm">
            {typingUsers.length} user(s) typing...
          </p>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Section (fixed bottom) */}
      <div className="p-4 bg-gray-900 flex items-center space-x-3 border-t border-gray-800">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleTyping}
            onKeyPress={handleKeyPress}
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-sm sm:text-base"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-700 rounded-full">
            <Paperclip size={18} className="text-gray-400" />
          </button>
        </div>
        <button className="p-3 bg-green-500 rounded-full hover:bg-green-600">
          <Mic size={20} className="text-white" />
        </button>
        <button
          onClick={handleSendMessage}
          className="p-3 bg-orange-500 rounded-full hover:bg-orange-600"
        >
          <Send size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}
