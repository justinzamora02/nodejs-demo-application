const { URL } = require('url');
const config = require('./index');
const logger = require('../lib/logger');

const url = new URL(config.database.url);
const { username, password, hostname, pathname } = url;
const database = pathname.slice(1);

const hooks = {
  afterConnect: () => logger.info('Successfully connected to database'),
};

module.exports = {
  dialect: 'postgres',
  host: hostname,
  password: password,
  username: username,
  database: database,
  hooks,
};
