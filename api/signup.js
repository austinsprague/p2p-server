var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
var helpers = require('./helpers');
var stripe = require('stripe')(process.env.STRIPE);

router.post('/', function(req, res){
  var token = req.body.token;
  var email = req.body.email;
  helpers.stripeCustCreate(token, email).then(function(customer) {
    queries.Users().insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address: '111 Pine St',
      city: req.body.city,
      state: req.body.state,
      phone_num: req.body.phone_num,
      email: req.body.email,
      pwd: req.body.pwd,
      stripe_cust_id: customer.id,
      background: req.body.token,
      stripe_card_id: req.body.stripe_card_id
    }).then(function(data){
      res.json(data)
    })
  })
  .catch(function(err){
      console.log('error', err);
      res.json(err);
  })
});


module.exports = router;
