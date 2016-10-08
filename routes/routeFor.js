var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inicio', function(req, res, next) {
  res.render('for/inicio', { title: 'Express' });
});

router.get('/final', function(req, res, next) {
  res.render('for/final', { title: 'Express' });
});

module.exports = router;