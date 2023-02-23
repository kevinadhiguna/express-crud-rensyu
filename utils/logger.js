/**
 * The following transport options are available in Winston by default:
 * 
 * 1) Console: output logs to the Node.js console.    -> new winston.transports.Console()
 * 2) File: store log messages to one or more files.  -> new winston.transports.File()
 * 3) HTTP: stream logs to an HTTP endpoint.          -> new winston.transports.HTTP()
 * 4) Stream: output logs to any Node.js stream.      -> new winston.transports.Stream()
 */

// -- Version 3 --
const winston = require("winston");
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.Console(),
  ],
});

// -- Version 2 --
// const winston = require("winston");

// const logger = winston.createLogger({
//   level: process.env.LOG_LEVEL || 'info',
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.Console(),

//     // Write all logs with importance level of `error` or less to `error.log`
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),

//     // Write all logs with importance level of `info` or less to `combined.log`
//     new winston.transports.File({ filename: 'combined.log' }),
//   ],
// });

// // If not in production env then log to the `console` with the format:
// // `${info.level}: ${info.message} JSON.stringify({ ...rest })`
// if (process.env.NODE_ENV !== "production") {
//   const devFormat = new winston.transports.Console({ 
//     format: winston.format.simple() 
//   });
//   logger.add(devFormat);
// }

// -- Version 1 --
// const { createLogger, format, transports } = require("winston");

// const logger = createLogger({
//   level: "debug",
//   format: format.json(),
//   transports: [new transports.Console()],
// });

module.exports = logger;
