var exec = require('child_process').execSync;
var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  //exec('rm archivo.c a.out', {shell: '/bin/bash', encoding: 'utf8'});
  var programa = req.body.previo + req.body.edicion + req.body.posterior;
  //console.log(programa);
  console.log(programa);
  fs.unlink("a.out", function(){
    fs.writeFile('archivo.c', programa, function(err){
      if(err){
        console.log(err);
        res.json('no se pudo compilar');
        res.end();
      }
      var ruta = exec('pwd', {shell: '/bin/bash', encoding: 'utf8'});
      console.log(ruta);
      var compilacion = exec('gcc archivo.c', {shell: '/bin/bash', encoding: 'utf8'});
      var ejecucion = exec(ruta.substr(0, ruta.length - 1) + '/a.out',{shell: '/bin/bash', encoding: 'utf8'});
      //fs.unlink
      res.json(ejecucion);
      res.end();
    });
  });
});

module.exports = router;