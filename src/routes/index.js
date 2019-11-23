var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const currentTime = new Date();
  res.render('index', { title: 'Express', currentTime });
});

module.exports = router;
