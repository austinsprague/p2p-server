var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var knex = require('./db/knex');
// var rp = require('request-promise');
// var cors = require('cors');
var api = require('./api')


// ________Paypal
// var PayPalStrategy = require('passport-paypal-oauth').Strategy;
// var passport = require('passport');

// require('dotenv').load();

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(passport.initialize());
// app.use(cors());
app.use('/api', api);


// ________Paypal
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
//
// passport.deserializeUser(function(obj, done) {
//   done(null, obj);
// });
// app.get('/auth/paypal',
//   passport.authenticate('paypal'));
//
// passport.use(new PayPalStrategy({
//     clientID: process.env.PAYPAL_APP_ID,
//     clientSecret: process.env.PAYPAL_APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/paypal/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ paypalId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));
// app.get('/auth/paypal/callback',
// passport.authenticate('paypal', { failureRedirect: '/login' }),
// function(req, res) {
//   // Successful authentication, redirect home.
//   res.redirect('/');
// });




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
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;


// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', routes);
// app.use('/users', users);

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
