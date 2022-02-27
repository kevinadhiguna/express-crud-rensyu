const express = require("express");
const app = express();
require("dotenv").config();

// Connect to Database
const connectDB = require("./config/db");
connectDB();

// JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register routes
const userRoutes = require("./routes/userRoute");
const goalRoutes = require("./routes/goalRoute");
app.use("/api/users", userRoutes);
app.use("/api/goals", goalRoutes);

// Use custom error handler
const { errorHandler } = require("./middleware/errorHandler");
app.use(errorHandler);

// Port binding and start the app
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on port ${port}, waiting for database..`);
});
