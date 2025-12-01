import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllUsersWithChats, getAdminChat, adminReply } from "../api/client";

export default function AdminSupport() {
  const { userId } = useParams(); // get userId from route
  const navigate = useNavigate(); // for back navigation
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef(null);

  // ------------------ SCROLL TO BOTTOM ------------------
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat, typing]);

  // ------------------ FETCH USERS ------------------
  const fetchUsers = async () => {
    try {
      const res = await getAllUsersWithChats();
      setUsers(res.data);

      // If a userId is present in URL, select that user
      if (userId) {
        const userFromUrl = res.data.find((u) => u.user._id === userId);
        if (userFromUrl) setSelectedUser(userFromUrl);
      }
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [userId]);

  // ------------------ FETCH CHAT FOR SELECTED USER ------------------
  const fetchChat = async (uid) => {
    try {
      const res = await getAdminChat(uid);
      setChat(res.data);
    } catch (err) {
      console.error("Failed to fetch chat:", err);
    }
  };

  useEffect(() => {
    if (selectedUser) {
      fetchChat(selectedUser.user._id);
      const interval = setInterval(() => fetchChat(selectedUser.user._id), 2000);
      return () => clearInterval(interval);
    }
  }, [selectedUser]);

  // ------------------ SEND MESSAGE ------------------
  const handleSendMessage = async () => {
    if (!message.trim() || !selectedUser) return;
    setTyping(true);

    try {
      await adminReply(selectedUser.user._id, message);
      setMessage("");
      fetchChat(selectedUser.user._id); // refresh chat
    } catch (err) {
      console.error("Failed to send admin message:", err);
      alert("Failed to send message.");
    } finally {
      setTyping(false);
    }
  };

  // ------------------ UI ------------------
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Users List */}
      <div className="w-1/4 border-r border-gray-700 p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Users</h2>
        {users.map((user) => (
          <div
            key={user.user._id}
            className={`p-2 rounded cursor-pointer mb-2 ${
              selectedUser?.user._id === user.user._id ? "bg-blue-600" : "bg-gray-700"
            }`}
            onClick={() => setSelectedUser(user)}
          >
            {user.user.name} ({user.user.email})
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col p-4">
        {!selectedUser ? (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            Select a user to view chat
          </div>
        ) : (
          <>
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="mb-4 px-3 py-1 w-[8vw] bg-gray-700 rounded hover:bg-gray-600 transition"
            >
              ← Back
            </button>

            <h2 className="text-xl font-bold mb-4">Chat with {selectedUser.user.name}</h2>

            <div className="flex-1 overflow-y-auto space-y-3 bg-gray-800 p-4 rounded shadow-inner">
              <div className="p-3 rounded-lg max-w-[75%] bg-gray-600">
                Thanks for contacting support! Our team will reach out to you within 24 hours.
              </div>

              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg max-w-[75%] ${
                    msg.sentBy === "admin" ? "bg-blue-600 ml-auto" : "bg-gray-600"
                  }`}
                >
                  {msg.message}
                </div>
              ))}

              {typing && (
                <div className="flex justify-end">
                  <div className="p-2 bg-blue-600 rounded-lg w-20 flex gap-1 items-center">
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef}></div>
            </div>

            {/* Input Area */}
            <div className="mt-3 flex gap-2">
              <input
                className="flex-1 p-2 rounded bg-gray-700 text-white outline-none"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                className="px-4 bg-blue-500 rounded hover:bg-blue-600 transition"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
