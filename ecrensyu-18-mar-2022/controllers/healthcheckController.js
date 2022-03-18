const isServiceHealthy = (req, res, next) => {
  // Format time (reference : https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/)
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  // Returns how many seconds NodeJS process is running (reference : https://nodejs.org/api/process.html#processuptime)
  const processUptime = process.uptime();

  const healthyData = {
    uptime: `Process has been running for ${processUptime} seconds.`,
    message: "Service is healthy !",
    time: today.toUTCString(),
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
