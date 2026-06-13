const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
const submissionRoutes = require("./routes/submissionRoutes");

dotenv.config();

connectDB();

const app = express();

// CORS FIX
app.use(
  cors({
    origin: [
      "https://learn2-hire-cmjz.vercel.app",
      "https://learn2-hire-cmjz-7d4o9a752-anitha-mallina.vercel.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/trainer", trainerRoutes);
app.use("/api/submission", submissionRoutes);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Learn2Hire API",
  });
});

// Health Check
app.get("/api", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Running Successfully",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});