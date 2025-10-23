import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://loopgh.vercel.app", 
    process.env.FRONTEND_URL 
  ].filter(Boolean),
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

connectDB();

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.use("/api/users", authRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));