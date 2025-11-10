import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, Paperclip, Send, MoreVertical } from "lucide-react";
import {
  getGroupMessages,
  sendGroupMessage,
  getGroupById,
  deleteGroupMessageForMe,
  deleteGroupMessageForEveryone,
  sendGroupAudioMessage,
} from "../../../api/client";
import io from "socket.io-client";
import Cookies from "js-cookie";
import getImageUrl from "../../utils/getImgUrl/getImgUrl";

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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

        setGroupInfo(groupRes.data);
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
    setMessages((prev) =>
      prev.map((m) =>
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
          const newAudioMessage = res.data.data;

          socketRef.current.emit("sendGroupAudioMessage", newAudioMessage);
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
    <div className="flex flex-col h-[100vh] bg-gray-900 fixed inset-0 md:left-[16%]">
      {/* Header */}
<div className="bg-white/90 backdrop-blur mt-24 border-b shadow-sm p-3 sm:p-4 flex items-center justify-between sticky top-0 z-50 w-full">

  <div className="flex items-center space-x-3 sm:space-x-4">
    <button
      onClick={onBack}
      className="p-1 sm:p-2 hover:bg-gray-100 rounded-full"
    >
      <ArrowLeft size={20} className="text-gray-600" />
    </button>

    {groupInfo && (
      <div className="flex items-center space-x-3">
        {/* Group Image */}
        {/* <p>{groupInfo}</p> */}
        <img
          src={groupInfo.image || "/default-group.png"}
          alt={groupInfo.name}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />

        <div className="flex flex-col">
          {/* Group Name */}
          <h2 className="font-semibold text-sm sm:text-base text-gray-900">
            {groupInfo.name}
          </h2>

          {/* Group Members Avatars */}
          {/* {groupInfo.members && (
            <div className="flex -space-x-2 mt-1">
              {groupInfo.members.slice(0, 6).map((member) => (
                <img
                  key={member._id}
                  src={getImageUrl(member.profilePic) || "/default-avatar.png"}
                  alt={member.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover"
                  title={member.name}
                />
              ))}
              {groupInfo.members.length > 6 && (
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-300 text-gray-700 text-[10px] sm:text-xs flex items-center justify-center rounded-full border-2 border-white">
                  +{groupInfo.members.length - 6}
                </div>
              )}
            </div>
          )} */}
        </div>
      </div>
    )}
  </div>

  <button className="p-2 hover:bg-gray-100 rounded-full">
    <MoreVertical size={20} className="text-gray-600" />
  </button>
</div>


      {/* Chat Section */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-2 sm:py-4 space-y-3 sm:space-y-4 bg-gray-900">
        {messages.map((msg) => {
  if (!msg || !msg.sender) return null;
  const isOwnMessage = msg.sender._id === currentUser?._id;

  return (
    <div
      key={msg._id || Math.random()}
      className={`flex ${isOwnMessage ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex flex-col items-${
          isOwnMessage ? "end" : "start"
        } max-w-[80%] sm:max-w-[65%] md:max-w-[55%]`}
      >
        <div
          className={`flex items-end space-x-2 ${
            isOwnMessage ? "flex-row-reverse space-x-reverse" : ""
          }`}
        >
          <img
            src={msg.sender.profilePic || "/default-avatar.png"}
            alt="Avatar"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
          />

          <div
            className={`group relative px-3 py-2 sm:px-4 sm:py-2 rounded-2xl text-sm sm:text-base break-words ${
              isOwnMessage
                ? "bg-orange-500 text-white"
                : "bg-orange-400 text-white"
            }`}
          >
            {msg.isDeletedForEveryone ? (
              <p>🚫 This message was deleted</p>
            ) : msg.type === "audio" ? (
              <audio controls src={msg.audioUrl} className="w-40 sm:w-48" />
            ) : (
              <p>{msg.content}</p>
            )}

            {/* 🗑 Hover Delete Buttons */}
            {!msg.isDeletedForEveryone && (
              <div
                className="absolute left-1/2 -translate-x-1/2 translate-y-2 opacity-0 
                group-hover:translate-y-0 group-hover:opacity-100 
                transition-all duration-200 flex flex-col gap-2 mt-1 bg-gray-800 p-1 rounded-lg shadow-lg z-10"
              >
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
      </div>
    </div>
  );
})}



        {typingUsers.length > 0 && (
          <p className="text-gray-400 text-xs sm:text-sm">
            {typingUsers.length} user(s) typing...
          </p>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Footer Input */}
      <div className="p-3 sm:p-4 bg-gray-900 flex items-center gap-2 sm:gap-3 border-t border-gray-800 sticky bottom-0 z-50">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleTyping}
            onKeyPress={handleKeyPress}
            className="w-full bg-gray-800 text-white px-4 py-2 sm:py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-sm sm:text-base"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-700 rounded-full">
            <Paperclip size={18} className="text-gray-400" />
          </button>
        </div>

        {!isRecording ? (
          <button
            onClick={startRecording}
            className="p-2 sm:p-3 bg-orange-500 rounded-full hover:bg-orange-600"
          >
            🎙️
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="p-2 sm:p-3 bg-red-600 rounded-full hover:bg-red-700"
          >
            ⏹️
          </button>
        )}

        <button
          onClick={handleSendMessage}
          className="p-2 sm:p-3 bg-orange-500 rounded-full hover:bg-orange-600"
        >
          <Send size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}
