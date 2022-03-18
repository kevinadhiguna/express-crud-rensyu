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

// Import and implement Helmet
const helmet = require("helmet");
app.use(helmet());

// Register routes
const userRoutes = require("./routes/userRoute");
const goalRoutes = require("./routes/goalRoute");
const healthcheckRoutes = require("./routes/healthcheckRoute");
app.use("/api/users", userRoutes);
app.use("/api/goals", goalRoutes);
app.use("/healthcheck", healthcheckRoutes);

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

// Handling interrupt signal (SIGINT), such as Ctrl + C
process.on("SIGINT", () => {
  console.log("\nReceiving SIGINT, process interrupted..");
  server.close((errSigint) => {
    console.log(`Error closing server after receiving SIGINT : ${errSigint}`);
  });
  process.exit();
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("\nReceiving SIGTERM, process terminated..");
  server.close((errSigterm) => {
    console.log(`Error closing server after receiving SIGTERM : ${errSigterm}`);
  });
});
