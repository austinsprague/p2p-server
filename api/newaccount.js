var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
var helpers = require('./helpers');
var stripe = require('stripe')(process.env.STRIPE);

router.post('/', function(req, res){
  return stripe.accounts.create({
    country: "US",
    managed: true,
  }, function(acct){
    acct.id 
    console.log('account created');
  }).then(function(data){
    res.json(data);
  }).catch(function(err){
    console.log('error', err);
    res.json(err);
  })
});

module.exports = router;
