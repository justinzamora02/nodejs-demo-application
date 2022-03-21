const logger = require('../lib/logger');

const errorLogger = (error, req, resp, next) => {
  logger.error(error);
  resp.status(500);
  resp.send({
    error: 'Unexpected server error',
  });
};

module.exports = errorLogger;
