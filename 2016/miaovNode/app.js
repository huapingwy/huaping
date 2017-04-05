var express = require('express');
var swig = require('swig');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.engine('html', swig.renderFile);
app.set('views', './views');
app.set('view engine', 'html');
swig.setDefaults({cache: false});


app.get('/', function (req, res, next) {
  res.render('index');

});

app.listen(8081);