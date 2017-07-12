const express = require('express');
const router = express.Router();

router.get('/', function _onGetIndex(req, res, next) {
  res.render('index.html');
});

module.exports = router;
