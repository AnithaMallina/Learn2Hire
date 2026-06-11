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

// Middleware
app.use(cors());
app.use(express.json()); // MUST come before routes

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/trainer", trainerRoutes);
app.use("/api/submission", submissionRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Learn2Hire API",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});