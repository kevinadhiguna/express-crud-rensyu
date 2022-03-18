const express = require("express");
const router = express.Router();

// Import healthcheck controller
const isServiceHealthy = require("../controllers/healthcheckController");

// Check health
router.get("/", isServiceHealthy);

module.exports = router;
