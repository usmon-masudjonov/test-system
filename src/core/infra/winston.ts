import winston from "winston";
import LoggerConfig from "../../config/logger";

function createLogger(opts: any) {
  const {
    level = "info",
    getCorrelationId,
    noCorrelationIdValue = "nocorrelation",
  } = opts;

  return winston.createLogger({
    format: winston.format.combine(
      winston.format((info) => {
        info.correlationId = getCorrelationId() || noCorrelationIdValue;
        return info;
      })(),
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      winston.format.printf(({ timestamp, correlationId, level, message }) => {
        return `${timestamp} (${correlationId}) - ${level}: ${message}`;
      }),
      winston.format.json({
        space: 2,
      })
    ),
    level,
    transports: [
      new winston.transports.Console({
        handleExceptions: true,
      }),
      new winston.transports.File({
        filename: LoggerConfig.directory,
      }),
    ],
    exitOnError: false,
  });
}

export { createLogger };
