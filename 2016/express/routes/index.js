var express = require('express');
var http = require('http');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  http.get('')

  res.render('index', { title: 'Express' });
});

module.exports = router;
