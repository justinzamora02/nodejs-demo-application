const express = require('express');
const coinRouter = require('./coins');
const trackerRouter = require('./tracker');

const router = express.Router();

router.get('/healthz', async (request, response) => {
  response.status(200);
  response.send('OK');
});

router.use('/coins', coinRouter);
router.use('/tracker', trackerRouter);

module.exports = router;
