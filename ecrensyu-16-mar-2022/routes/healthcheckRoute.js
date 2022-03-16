const express = require("express");
const router = express.Router();

// Import healthcheck controller
const isServiceHealthy = require("../controllers/healthCheckController");

// Healthcheck
router.get("/", isServiceHealthy);

module.exports = router;
