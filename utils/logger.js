// -- Version 2 --
const winston = require("winston");

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    // Write all logs with importance level of `error` or less to `error.log`
    new winston.transports.File({ filename: 'error.log', level: 'error' }),

    // Write all logs with importance level of `info` or less to `combined.log`
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// If not in production env then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest })`
if (process.env.NODE_ENV !== "production") {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

// -- Version 1 --
// const { createLogger, format, transports } = require("winston");

// const logger = createLogger({
//   level: "debug",
//   format: format.json(),
//   transports: [new transports.Console()],
// });

module.exports = logger;
