const express = require('express');
const { addToPortfolio } = require('../services/tracker');
const logger = require('../lib/logger');

const router = express.Router();

router.get('/:id', async (request, response) => {
  const coin = request.params.id;
  const stock = await addToPortfolio(coin);
  response.send(stock);
});

module.exports = router;
