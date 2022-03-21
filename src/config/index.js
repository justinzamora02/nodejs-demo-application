const env = process.env.NODE_ENV || 'development';
const logger = require('../lib/logger');

if (env === 'development') {
  logger.info('Loading local config');
  require('dotenv').config();
}

const database = {
  url: process.env.DATABASE_URL || 'postgres://sample_demo_user:@127.0.0.1:5432/sample_demo',
};

const http = {
  port: 3000,
};

module.exports = {
  env,
  database,
  http,
};
