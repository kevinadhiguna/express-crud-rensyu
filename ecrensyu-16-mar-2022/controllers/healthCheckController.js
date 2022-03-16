const isServiceHealthy = (req, res, next) => {
  const healthyData = {
    duration: process.uptime(),
    message: "Service is healthy !",
    time: Date.now(),
  };

  const unhealthyData = {
    message: "Service is unhealthy...",
  };

  try {
    res.status(200).send(healthyData);
  } catch (errorHealthcheck) {
    res.status(503).send(unhealthyData);
  }
};

module.exports = isServiceHealthy;
