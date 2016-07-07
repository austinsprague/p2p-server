var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var knex = require('./db/knex');
var cors = require('cors');
var passport = require('passport');
var StripeStrategy = require('passport-stripe').Strategy;
var stripe = require("stripe")(process.env.STRIPE);
var queries = require("./db/queries")
require('dotenv').load();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_KEY]
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(function (req, res, next) {
  res.locals.user = req.user
  next()
});
app.use('/api', require('./api'));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user)
});

passport.use(new StripeStrategy({
    clientID: process.env.STRIPE_ID,
    clientSecret: process.env.STRIPE_SECRET,
    callbackURL: process.env.HOST + "/auth/stripe/callback"
  },
  function(accessToken, refreshToken, stripe_properties, done) {
    var stripe = require("stripe")(process.env.STRIPE);
    stripe.accounts.retrieve(stripe_properties.stripe_user_id, function(err, account) {
      queries.Users().insert({
        first_name: account.display_name,
        stripe_acct_id: account.id
      }).then(function(data) {
        console.log('inserted into db');
        done(null, account.display_name);
      })
    });
  }
));

app.get('/auth/stripe', passport.authenticate('stripe'));
app.get('/auth/stripe/callback',
  passport.authenticate('stripe', { failureRedirect: '/api/users'}),
  function(req, res) {
    res.redirect('http://localhost:3000/#/home') }
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
