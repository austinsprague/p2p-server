var express = require('express');
var queries = require('../db/queries');
var bcrypt   = require('bcrypt-nodejs');
var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user'); // user model dont know yet


module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {

  })
}



module.exports = {
  userSchema
}
