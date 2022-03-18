const express = require("express");
const router = express.Router();

// Import user controllers
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

// Import auth middleware
const protect = require("../middleware/authMiddleware");

// Register
router.post("/", registerUser);
// Login
router.post("/login", loginUser);
// Get user data
router.get("/getMe", protect, getMe);

module.exports = router;
