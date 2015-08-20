var express = require('express');
var router = express.Router();

/* GET available files. */
router.get('/', function(req, res, next) {
  res.send('file list');
});

module.exports = router;
