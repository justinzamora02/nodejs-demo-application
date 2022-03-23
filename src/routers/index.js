const express = require('express');
const coinRouter = require('./coins');

const router = express.Router();

router.get('/healthz', async (request, response) => {
  response.status(200);
  response.send('OK');
});

router.use('/coins', coinRouter);

module.exports = router;
