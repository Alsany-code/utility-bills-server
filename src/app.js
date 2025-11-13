import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("Utility Bills Server is running...");
});

export default app;
