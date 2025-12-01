import { useState, useRef, useEffect } from "react";
import { getUserChat, sendUserMessage } from "../../../api/client";

export default function Support() {
  const [screen, setScreen] = useState("intro"); // "intro" | "chat"
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [typing, setTyping] = useState(false);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // Auto scroll to last message
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

 const prevChatLength = useRef(0);

useEffect(() => {
  if (chat.length > prevChatLength.current) {
    scrollToBottom();
  }
  prevChatLength.current = chat.length;
}, [chat]);

  // Fetch chat from backend
  const fetchChat = async () => {
  try {
    setLoading(true);
    const res = await getUserChat();

    // res.data should be an array; fallback to empty array
    setChat(Array.isArray(res.data) ? res.data : []);
    setLoading(false);
  } catch (err) {
    console.error("Failed to fetch chat:", err);
    setLoading(false);
    setChat([]); // fallback
  }
};

  // Poll chat every 2 seconds when on chat screen
  useEffect(() => {
    if (screen === "chat") {
      fetchChat();
      const interval = setInterval(fetchChat, 2000);
      return () => clearInterval(interval);
    }
  }, [screen]);

  // Send user message
  const handleSendMessage = async () => {
  if (!message.trim()) return;

  setTyping(true);

  setChat(prev => {
    const newChat = [...prev, { message, sentBy: "user" }];


    return newChat;
  });

  setMessage("");

  try {
    await sendUserMessage(message);
    fetchChat(); // refresh from backend to get any admin replies
    setTyping(false);
  } catch (err) {
    console.error("Failed to send message:", err);
    setTyping(false);
    alert("Failed to send message. Make sure you are logged in.");
  }
};


  // ------------------ INTRO SCREEN ------------------
  if (screen === "intro") {
    return (
      <div className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">Support Center</h1>
        <p className="text-gray-300 text-center max-w-md mb-6">
          If you're facing any problems or issues, feel free to contact our support team.
          Click the button below to start a conversation.
        </p>
        <button
          onClick={() => setScreen("chat")}
          className="px-6 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition"
        >
          Chat with Support
        </button>
      </div>
    );
  }

  // ------------------ CHAT SCREEN ------------------
  return (
    <div className="h-screen bg-gray-900 text-white p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4 mt-16">Support Chat</h2>

      <div className="flex-1 overflow-y-auto space-y-3 bg-gray-800 p-4 rounded shadow-inner">
        {/* {loading && <div className="text-gray-400">Loading messages...</div>} */}
        <div className="p-3 rounded-lg max-w-[75%] bg-gray-600">
    Thanks for contacting support! Our team will reach out to you within 24 hours.
  </div>

        {chat.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[75%] ${
              msg.sentBy === "user" ? "bg-blue-600 ml-auto" : "bg-gray-600"
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
          placeholder="Type your issue..."
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
    </div>
  );
}
