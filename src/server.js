import mongoose from "mongoose";
import app from "./app.js";

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
