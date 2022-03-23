const Sequelize = require('sequelize');
const database = require('../../config/database');
const logger = require('../../lib/logger');

module.exports = new Sequelize({
  ...database,
  define: {
    underscored: true,
  },
  logging: (param) => logger.debug.bind(logger)(param.toString()),
  schema: 'public',
  searchPath: 'public',
});
