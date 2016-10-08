var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inicio', function(req, res, next) {
  res.render('/variables/inicio', { title: 'Express' });
});

module.exports = router;