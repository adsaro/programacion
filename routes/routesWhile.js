var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('while/index', { title: 'Express' });
});

router.get('/inicio', function(req, res, next) {
  res.render('while/inicio', { title: 'Ciclo While - Inicio' });
});

router.get('/inicio_ejemplos', function(req, res, next) {
  res.render('while/inicio_ejemplos', { title: 'Ciclo While - Inicio' });
});

router.get('/multiple', function(req, res, next) {
  res.render('while/multiple', { title: 'Ciclo While - Sentencias multiples' });
});

router.get('/multiple_ejemplos', function(req, res, next) {
  res.render('while/multiple_ejemplos', { title: 'Ciclo While - Sentencias multiples' });
});

router.get('/bloque', function(req, res, next) {
  res.render('while/bloque', { title: 'Ciclo While - Sentencias en bloque' });
});

router.get('/usos', function(req, res, next) {
  res.render('while/usos', { title: 'Ciclo While - Usos del ciclo while' });
});

router.get('/final', function(req, res, next) {
  res.render('while/final', { title: 'Ciclo While - Final' });
});

module.exports = router;