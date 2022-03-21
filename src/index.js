const config = require('./config');
const logger = require('./lib/logger');
const coins = require('./services/get-coins');

logger.info('Starting application eme');

async function main() {
  try {
    const allCoins = await coins.getCoins();
    logger.info(allCoins);
  } catch (err) {
    logger.error(err);
  }
}

main()
  .then()
  .catch((err) => {
    logger.error(err);
    process.exit(1);
  });
