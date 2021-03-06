var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var knex = require('./db/knex');
// var cors = require('cors');
var passport = require('passport');
var StripeStrategy = require('passport-stripe').Strategy;
var stripe = require("stripe")(process.env.STRIPE);
var queries = require("./db/queries");
var helpers = require("./api/helpers")
require('dotenv').load();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_KEY],
  httpOnly: false
}))
app.use(express.static('public/app'));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.locals.user = req.user
  next()
});
app.use('/api', require('./api'));

passport.serializeUser(function(user, done) {
  console.log('serializing user', user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log('deserializing user', user);
    done(null, user);
});

passport.use(new StripeStrategy({
    clientID: process.env.STRIPE_ID,
    clientSecret: process.env.STRIPE,
    callbackURL: process.env.HOST + "/auth/stripe/callback"
  },
  function(accessToken, refreshToken, stripe_properties, done) {
    helpers.stripeAcctRetrieve(stripe_properties).then(function(user) {
      done(null, user);
    }).catch(function(err) {
      console.log('error logging in', err);
      done(err);
    })
  }))


app.get('/auth/stripe', passport.authenticate('stripe', { scope: 'read_write' }));
app.get('/auth/stripe/callback',
  passport.authenticate('stripe', { failureRedirect: '/#/home'}),
  function(req, res) {
    console.log(req.user);
    console.log('redirect success');
    res.redirect('/#/home')
  }
)

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
    })
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
