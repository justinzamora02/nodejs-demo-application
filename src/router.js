const express = require('express');

const router = express.Router();

router.get('/healthz', async (request, response) => {
  response.status(200);
  response.send('OK');
});

module.exports = router;
