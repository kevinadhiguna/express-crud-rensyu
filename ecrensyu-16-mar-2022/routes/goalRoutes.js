const express = require("express");
const router = express.Router();

// Import goal controllers
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// Import auth middleware
const protect = require("../middleware/authMiddleware");

// Get goals
router.get("/", protect, getGoals);
// Set goal
router.post("/", protect, setGoal);
// Update goal
router.put("/:id", protect, updateGoal);
// Delete goal
router.delete("/:id", protect, deleteGoal);

module.exports = router;
