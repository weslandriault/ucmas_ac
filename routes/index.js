const express = require('express');
const router = express.Router();

router.get('/', function _onGetIndex(req, res, next) {
  res.send('INDEX PAGE')
});

module.exports = router;
