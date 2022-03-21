const env = process.env.NODE_ENV || 'development';
const logger = require('../lib/logger');

if (env === 'development') {
  logger.info('Loading local config');
  require('dotenv').config();
}

module.exports = {
  env,
};
