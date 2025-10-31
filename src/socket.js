import { io } from "socket.io-client";

let socket;

export const initializeSocket = () => {
  if (!socket) {
    socket = io(import.meta.env.VITE_BACKEND_URL, {
      auth: { token: localStorage.getItem("token") },
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("Connected to socket:", socket.id);
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
