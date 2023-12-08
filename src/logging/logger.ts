import winston from 'winston';


const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    auth: 6,
  };

  winston.addColors({
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'blue',
    verbose: 'cyan',
    debug: 'magenta',
    auth: 'yellow', // Add color for the 'auth' level
  });

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'error',
    levels: levels,
    format:logFormat,
    transports: [
      new winston.transports.Console({ format: winston.format.combine(winston.format.colorize(), logFormat) }),
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),      
      new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

if (process.env.NODE_ENV !== 'production') {
logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));
}


export default logger;