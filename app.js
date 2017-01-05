const express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    gulp = require('gulp'),


    uri = 'mongodb://JensAdm:123@ds151228.mlab.com:51228/esportsdb',
    app = express(),
    passport = require('passport'),
    expressVal = require('express-validator'),

    port = process.env.PORT || 3000,
    server = require('http').createServer(app),
    io = require('socket.io')(server);
/*
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest1');
*/


mongoose.connect(uri, function (err,res) {
    if(err) { console.log('Error: ' + uri + " , " + err);}
    else { console.log('Succes: ' + uri); }
});


//cors
app.use('*', cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/',express.static('apidoc'))
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(passport.initialize());
require('./config/passport')(passport);

app.use(expressVal([]));
require('./config/routes')(app,io);

server.listen(port, function(){
    console.log('listening on' + port);
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
// test