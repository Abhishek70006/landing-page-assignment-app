require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const projectRoutes = require("./routes/projectRoutes");
const clientRoutes = require("./routes/clientRoutes");
const contactRoutes = require("./routes/contactRoutes");
const subscribeRoutes = require("./routes/subscribeRoutes");
const adminRoutes = require("./routes/adminRoutes");
const auth = require("./routes/authController");

const app = express();
// app.use(cors());
const allowedOrigins = [
  "http://localhost:3000",
  "https://landing-page-assignment-app.vercel.app",
  "https://landing-page-assignment-app.onrender.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/fullstack_app")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", auth);

app.get("/", (req, res) => res.send("API is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
