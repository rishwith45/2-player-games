import { io } from "socket.io-client";

const signaling = () => {
  const socket = io("http://localhost:5000");
  return socket;
};

export default signaling;
