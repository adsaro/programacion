var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/while', function(req, res, next) {
  res.render('view_while', { title: 'Express' });
});

router.get('/for/final', function(req, res, next) {
  res.render('view_while', { title: 'Express' });
});

module.exports = router;
