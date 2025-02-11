require("dotenv").config();
const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 🌍 API Routes
app.use("/api", apiRoutes);

// ✅ Health Check for Render
app.get("/", (req, res) => {
  res.send("🌍 AI Travel Planner Backend is Running!");
});

// 🏃 Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
