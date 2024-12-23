// server.ts
import express, { Request, Response } from "express";
import { Server } from "socket.io";
import cors from "cors";
import { createServer } from "http";

// Initialize Express app
const app = express();
const httpServer = createServer(app); // Create an HTTP server for Express
const io = new Server(httpServer, {
  cors: {
    origin: "*", // Allow all origins
  },
});

// Middleware to parse JSON bodies
app.use(express.json());
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST"], // Allow specific HTTP methods
  })
);

// Basic route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// Socket.IO event handling
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // Emit a message to the client
  socket.emit("message", "Hello from server!");

  // Listen for events from the client
  socket.on("custom-event", (data) => {
    console.log("Received custom event with data:", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Define the port
const PORT = 5000;

// Start the server using httpServer, not app.listen()
httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
