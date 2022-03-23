const express = require('express');
const models = require('./db/models');
const { httpLogger, errorHandler } = require('./middlewares');
const router = require('./router');

const createServer = async () => {
  const { sequelize } = models;

  await sequelize.authenticate();

  const app = express();

  app.use(express.json());
  app.use(httpLogger);
  app.use(errorHandler);
  app.use(router);

  return app;
};

module.exports = {
  createServer,
};
