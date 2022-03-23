const express = require('express');
const { getCoin, getCoins } = require('../services/coins');

const router = express.Router();

router.get('/', async (request, response) => {
  const coinsResponse = await getCoins();
  response.send(coinsResponse);
});

router.get('/:id', async (request, response) => {
  const coin = request.params.id;
  const coinResponse = await getCoin(coin);
  response.send(coinResponse);
});

module.exports = router;
