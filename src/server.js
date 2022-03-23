const logger = require('./lib/logger');

const { createServer } = require('./app');
const { http } = require('./config');

const main = async () => {
  const server = await createServer();
  const { port } = http;

  server.listen(port, () => {
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
};

main()
  .then()
  .catch((err) => logger.error(err));
