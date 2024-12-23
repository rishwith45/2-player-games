import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import signaling from "../services/signaling";
const LoginPage: React.FC = () => {
  const { userName, setUserName } = useUser();

  const handleJoin = () => {
    if (userName.trim()) {
      console.log(`Guest ${userName} is joining the game.`);
      const socket = signaling();
      console.log("socket", socket);
      // Add your join logic here
    } else {
      alert("Please enter a guest name.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Join as Guest</h1>
      <input
        type="text"
        placeholder="Enter guest name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handleJoin}
        style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px" }}
      >
        Join
      </button>
    </div>
  );
};

export default LoginPage;
