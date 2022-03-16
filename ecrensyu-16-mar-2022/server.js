const express = require("express");
const app = express();
require("dotenv").config();

// Parse JSON
app.use(express.json());
// Parse x-www-urlencoded
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
const connectDB = require("./config/db");
connectDB();

// Register routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const goalRoutes = require("./routes/goalRoutes");
app.use("/api/goals", goalRoutes);

const healthCheckRoute = require("./routes/healthcheckRoute");
app.use("/healthcheck", healthCheckRoute);

// Apply custom error handler
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

// Determine port and host/hostname
const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || "localhost";

// Start the app
const server = app.listen(PORT, HOSTNAME, () => {
  console.log(
    `App is running on ${HOSTNAME}:${PORT}, waiting for database connection...`
  );
});

// Catch interrupt signal (SIGINT)
process.on("SIGINT", () => {
  console.log("\nReceived SIGINT, process interrupted...");
  server.close((errSigint) => {
    console.log(`Error closing server after catching SIGINT : ${errSigint}`);
  });
  process.exit();
});

// Graceful Shutdown
process.on("SIGTERM", () => {
  console.log("Received SIGTERM, process terminated...");
  server.close((errSigterm) => {
    console.error(
      `Error closing server after catching SIGTERM : ${errSigterm}`
    );
  });
  process.exit();
});
