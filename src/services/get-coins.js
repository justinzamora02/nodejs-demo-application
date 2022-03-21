const coingecko = require('../lib/coingecko');

const getCoins = async () => coingecko.coins.all();

module.exports = {
  getCoins,
};
