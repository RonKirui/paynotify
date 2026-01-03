require("dotenv").config();
const express = require("express");
const connectDB = require("../config/db");

const userRoutes = require("../routes/UserRoutes");
const logRoutes = require("../routes/logRoutes");
const paymentRoutes = require("../routes/paymentRoutes");
const transactionRoutes = require("../routes/TransactionRoutes");
const groupRoutes = require ("../routes/groupRoutes")

const app = express();
app.use(express.json());

// MongoDB
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("PayNotify API running...");
});

// Routes

app.use("/api/groups", groupRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/trasnsaction", transactionRoutes);
app.use("/api/logs", logRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
