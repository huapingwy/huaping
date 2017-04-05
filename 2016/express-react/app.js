var path = require('path');
var express = require('express');
const mongoose = require('mongoose');
var favicon = require('serve-favicon');
var logger = require('morgan');
const Cookies = require('cookies');
var bodyParser = require('body-parser');
require('./lib/mongoose.js');


var routes = require('./routes/index');
var apiRoutes = require('./routes/api');
var login = require('./routes/login');
var register = require('./routes/register');
const adminRoute = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  req.cookies = new Cookies(req, res);
  req.userInfo = {};
  if(req.cookies.get('key')) {
    req.logined = true;
      req.userInfo.username = JSON.parse(req.cookies.get('userInfo')).username
    next();
    return;
  }

  req.logined = false;

  next();
})

app.use('/', routes);
app.use('/api', apiRoutes)
app.use('/login', login);
app.use('/register', register);
app.use('/admin', adminRoute)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
