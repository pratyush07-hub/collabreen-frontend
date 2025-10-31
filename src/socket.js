import { io } from "socket.io-client";

let socket;

export const initializeSocket = () => {
  if (!socket) {
    const backendURL =
      import.meta.env.VITE_BACKEND_URL ||
      "https://collabreen-backend.onrender.com";

    socket = io(backendURL, {
      auth: { token: localStorage.getItem("token") },
      transports: ["websocket", "polling"], // allow fallback
      reconnection: true, // auto-reconnect
      reconnectionAttempts: 5, // try 5 times
      reconnectionDelay: 2000, // wait 2s between retries
      timeout: 20000, // 20s connection timeout
    });

    // Connection status logs
    socket.on("connect", () => {
      console.log("WebSocket connected:", socket.id);
    });

    socket.on("disconnect", (reason) => {
      console.warn("WebSocket disconnected:", reason);
    });

    socket.on("connect_error", (err) => {
      console.error("WebSocket connection error:", err.message);
    });
  }

  return socket;
};

export const getSocket = () => {
  if (!socket) {
    throw new Error("Socket not initialized. Call initializeSocket() first.");
  }
  return socket;
};
