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

// Import and implement CORS
const cors = require("cors");

const corsOptionsDev = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
const allowedOrigins =
  process.env.ALLOWED_ORIGINS.split(",") || "http://localhost:3000";
const corsOptionsProd = {
  origin: allowedOrigins,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

const appCorsConfig =
  process.env.NODE_ENV == "production" ? corsOptionsProd : corsOptionsDev;
app.use(cors(appCorsConfig));

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

const createHttpTerminator = require("lil-http-terminator");

// Reference : https://github.com/flash-oss/lil-http-terminator#usage
const httpTerminator = createHttpTerminator({
  server,
  // gracefulTerminationTimeout: 1000, // optional
  // maxWaitTimeout: 30000, // optional
});

// Function triggered to shutdown server
async function shutdown(signalOrEvent) {
  console.log(`\n${signalOrEvent} occured, shutting down..`);
  const { code, message, success, error } = await httpTerminator.terminate();
  console.log(`
    HTTP server closure result :
      Success: ${success},
      Code: ${code},
      Message: ${message},
      Error (if exists): ${error || ""}
  `);
  process.exit(0);
}

// Signal
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

// Events
process.on("unhandledRejection", shutdown);
process.on("uncaughtException", shutdown);

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
