const coingecko = require('../lib/coingecko');

const getCoins = async () => coingecko.coins.list();
const getCoin = async (coin) => coingecko.coins.fetch(coin, {});

module.exports = {
  getCoin,
  getCoins,
};
