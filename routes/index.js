var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('welcome to express generator hehe');
});

module.exports = router;
