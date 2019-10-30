var express = require('express');
var router = express.Router();

/* GET db page. */

router.get('/', function(req, res, next) {
  res.send('try localhost:3000');
});

module.exports = router;
