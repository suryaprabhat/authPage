import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import otpRoutes from "./routes/authRoutes.js";
 // ✅ this must exactly match your folder + filename

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/auth", otpRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
