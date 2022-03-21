const express = require('express');
const logger = require('./lib/logger');
const { http } = require('./config');
const { httpLogger, errorHandler } = require('./middlewares');

const app = express();
const { port } = http;

app.use(express.json());
app.use(httpLogger);
app.use(errorHandler);

app.get('/healthz', async (request, response) => {
  response.status(200);
  response.send('OK');
});

const server = app.listen(port, () => {
  logger.info(`Listening on port: ${port}`);
});

const close = () => {
  logger.info(`Gracefully shutting down server`);
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
};

process.on('SIGTERM', close);
process.on('SIGINT', close);
