var express = require('express');
var router = express.Router();

/* GET HOME page. */
router.get('/', function(req, res, next) {
  res.render('site/index');
});
/* GET POST page. */
router.get('/', function(req, res, next) {
  res.send('ok');
});

module.exports = router;
