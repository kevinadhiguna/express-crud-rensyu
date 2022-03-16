const express = require("express");
const app = express();
require("dotenv").config();

// Connect to Database
const connectDB = require("./config/db");
connectDB();

// Parse JSON
app.use(express.json());
// Parse x-www-urlencoded
app.use(express.urlencoded({ extended: false }));

// Register routes
const userRoutes = require("./routes/userRoute");
const goalRoutes = require("./routes/goalRoute");
app.use("/api/users", userRoutes);
app.use("/api/goals", goalRoutes);

// Use custom error handler
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

// Determine port and host/hostname
const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || "localhost";

// Start the app
const server = app.listen(PORT, HOSTNAME, () => {
  console.log(`App is running on ${HOSTNAME}:${PORT}, waiting for database..`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
