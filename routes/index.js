var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ELSA_Test_Fontend', function(req, res, next) {
  res.sendFile('elsa_Test_Fontend.html', { root: 'html' });
});

module.exports = router;
