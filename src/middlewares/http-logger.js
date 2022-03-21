const logger = require('../lib/logger');

const httpLogger = (req, resp, next) => {
  const { url, method } = req;
  const httpLog = {
    time: new Date().toISOString(),
    http: {
      url,
      method,
    },
  };
  logger.info(httpLog);
  next();
};

module.exports = httpLogger;
