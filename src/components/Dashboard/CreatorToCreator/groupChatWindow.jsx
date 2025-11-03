import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, Paperclip, Send, MoreVertical } from "lucide-react";
import {
  getGroupMessages,
  sendGroupMessage,
  getGroupById,
  deleteGroupMessageForMe,
  deleteGroupMessageForEveryone,
  sendGroupAudioMessage, // ✅ Added
} from "../../../api/client";
import io from "socket.io-client";
import Cookies from "js-cookie";

export default function GroupChatWindow({ groupId, currentUser, onBack }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [groupInfo, setGroupInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [typingUsers, setTypingUsers] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  // 🧠 Initialize Socket Connection
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

    socket.on("receiveGroupAudioMessage", (newMessage) => {
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

    const handleGroupMessageDeleted = ({ messageId }) => {
      setMessages((prev) => prev.filter((m) => m._id !== messageId));
    };
    socket.on("groupMessageDeleted", handleGroupMessageDeleted);

    return () => {
      if (socket) {
        socket.off("groupMessageDeleted", handleGroupMessageDeleted);
        socket.emit("leaveGroupChat", groupId);
        socket.disconnect();
      }
    };
  }, [groupId]);

  // 📦 Fetch messages and group info
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
      if (groupRes.data.success)
        setGroupInfo(groupRes.data.group || groupRes.data.data);
      if (msgRes.data.success)
        setMessages(msgRes.data.data || msgRes.data.messages || []);
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

  // 📨 Send text message
  const handleSendMessage = async () => {
    if (!message.trim()) return;
    const msgContent = message.trim();
    setMessage("");

    try {
      if (socketRef.current && socketRef.current.connected) {
        socketRef.current.emit("sendGroupMessage", {
          groupId,
          content: msgContent,
          type: "text",
        });
      } else {
        const res = await sendGroupMessage(groupId, msgContent);
        if (res.data.success) setMessages((p) => [...p, res.data.data]);
      }
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  // ✏️ Typing event
  const handleTyping = (e) => {
    setMessage(e.target.value);
    if (socketRef.current) {
      socketRef.current.emit("typingGroup", {
        groupId,
        isTyping: e.target.value.length > 0,
      });
    }
  };

  // 🗑 Delete
  const handleDeleteForMe = async (id) => {
    try {
      await deleteGroupMessageForMe(id);
      setMessages((p) => p.filter((m) => m._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteForEveryone = async (id) => {
    try {
      await deleteGroupMessageForEveryone(id);
      setMessages((p) =>
        p.map((m) =>
          m._id === id
            ? {
                ...m,
                isDeletedForEveryone: true,
                content: "🚫 This message was deleted",
              }
            : m
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  // 🎙️ Record Audio Logic
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const file = new File([blob], "audioMessage.webm", {
          type: "audio/webm",
        });

        const formData = new FormData();
        formData.append("audio", file);

        try {
          const res = await sendGroupAudioMessage(groupId, formData);
          console.log("Audio message response:", res);
          const newAudioMessage = res.data.data;
          console.log("Audio message sent:", newAudioMessage);

          // Emit through socket
          socketRef.current.emit("sendGroupAudioMessage", newAudioMessage);

          // Add instantly
          setMessages((prev) => [...prev, newAudioMessage]);
        } catch (error) {
          console.error("Error sending audio:", error);
        }
      };

      recorder.start();
      setIsRecording(true);
      setMediaRecorder(recorder);
      setAudioChunks(chunks);
    } catch (err) {
      console.error("Recording failed:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
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
      {/* Header */}
      <div className="bg-white border-b p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
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
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreVertical size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Chat Section */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
        {messages.map((msg) => {
  // Prevent crash if message or sender is missing
  if (!msg || !msg.sender) return null;

  const isOwnMessage = msg.sender._id === currentUser?._id;

  return (
    <div
      key={msg._id || Math.random()}
      className={`flex ${isOwnMessage ? "justify-end" : "justify-start"} mb-3`}
    >
      <div
        className={`flex flex-col items-${
          isOwnMessage ? "end" : "start"
        } max-w-xs sm:max-w-sm md:max-w-md`}
      >
        <div
          className={`flex items-end space-x-2 ${
            isOwnMessage ? "flex-row-reverse space-x-reverse" : ""
          }`}
        >
          <img
            src={msg.sender.profilePic || "/default-avatar.png"}
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />

          {/* 💬 TEXT / 🎧 AUDIO message */}
          <div
            className={`px-4 py-2 rounded-2xl text-sm sm:text-base break-words ${
              isOwnMessage ? "bg-orange-500 text-white" : "bg-orange-400 text-white"
            }`}
          >
            {msg.isDeletedForEveryone ? (
              <p>🚫 This message was deleted</p>
            ) : msg.type === "audio" ? (
              <audio controls src={msg.content} className="w-48" />
            ) : (
              <p>{msg.content}</p>
            )}
          </div>
        </div>

        {/* 🗑 Delete options */}
        {!msg.isDeletedForEveryone && (
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => handleDeleteForMe(msg._id)}
              className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded"
            >
              Delete for Me
            </button>
            {isOwnMessage && (
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
  );
})}


        {typingUsers.length > 0 && (
          <p className="text-gray-400 text-sm">
            {typingUsers.length} user(s) typing...
          </p>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Footer Input */}
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

        {/* 🎙️ Record / Stop button */}
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="p-3 bg-orange-500 rounded-full hover:bg-orange-600"
          >
            🎙️
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="p-3 bg-red-600 rounded-full hover:bg-red-700"
          >
            ⏹️
          </button>
        )}

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
