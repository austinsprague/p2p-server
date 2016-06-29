var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var PayPalStrategy = require('passport-paypal-oauth').Strategy;
var passport = require('passport');
var app = express();
var api = require('./api')

app.use(passport.initialize());
app.use(passport.session())
app.use(app.router());
app.use(express.cookieParser());
app.use(express.logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_KEY]
}));

require('dotenv').load();

var paypalConfig = {
  clientID: process.env.PAYPAL_APP_ID,
  clientSecret: process.env.PAYPAL_APP_SECRET,
  callbackURL: process.env.HOST + "/auth/paypal/callback";
}

passport.use(new PayPalStrategy(paypalConfig,loginPaypalUser));

function loginPaypalUser(accessToken, refreshToken, profile, done) {
  User.findOrCreate({
    paypalId: profile.id
    console.log(profile);
  },
  function (err, user) {
    return done(err, user);
  });
}



passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
app.get('/auth/paypal',
  passport.authenticate('paypal'));



app.get('/auth/paypal/callback',
  passport.authenticate('paypal', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = app;
