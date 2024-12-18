// server.ts
import express, { Request, Response } from "express";
import path from "path";

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
