var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
var stripe = require("stripe")("sk_test_VAbPVNDFCIbiKiFovceDQAAt");

router.get('/', function (req, res) {
  queries.UserProjBacked().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.get('/:id', function (req, res) {
  queries.UserProjBacked().where({ user_id: req.params.id }).first().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.post('/charge', function(req, res){
  console.log(req.body.token);
  var token = req.body.token;
  queries.UserProjBacked().insert({
    user_id: 1,
    proj_id: 3,
    amt_pledged: 11,
    date_backed: 'may 11',
    order_id: 1,
    token: token
  }).then(function(){
    stripe.charges.create({
      amount: 400,
      currency: "usd",
      source: token,
      description: "Charge for test@example.com"
    }, function(err, charge) {
      console.log(err);
      console.log(charge);
      // asynchronously called
    });
    res.json(data);
  }).catch(function(err){
    res.json(err);
  })
});

router.post('/:id/charge', function (req, res) {
  queries.UserProjBacked().where({ user_id: req.params.id }).update({
    token: req.body.token
  }).then(function(data){
    res.json('successful update');
  }).catch(function(err){
    res.json(err);
  });
});

module.exports = router;
