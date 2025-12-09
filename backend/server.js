require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const stkRoutes = require("./routes/stkRoutes");
const c2bRoutes = require("./routes/c2bRoutes");
const logRoutes = require("./routes/logRoutes");

const app = express();
app.use(express.json());

// MongoDB
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("PayNotify API running...");
});

// Routes
app.use("/api/demo", demoRoutes);
app.use("/api/users", userRoutes);
app.use("/api/mpesa/stk", stkRoutes);
app.use("/api/mpesa/c2b", c2bRoutes);
app.use("/api/logs", logRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
