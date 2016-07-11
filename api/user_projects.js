var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
var helpers = require('./helpers');
var stripe = require("stripe")(process.env.STRIPE);

router.get('/', function (req, res) {
  queries.UserProjBacked().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.get('/:id', function (req, res) {
  queries.UserProjects().where({ user_id: req.params.id }).then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.post('/charge/:id', function (req, res) {
  console.log('this is charge req body', req.body);
  queries.UserProjBacked().insert({
      charge_stripe_cust_id: req.body.backer_id,
      proj_id: req.body.proj_id,
      amt_pledged: req.body.amount,
      user_id: req.body.user_id
  }).then(function(data){
    res.json(data);
    console.log('this is data', data);
    // return helpers.stripeCharge(req.body).then(function(data){
    //   res.json('successful user backed');
    // })
  }).catch(function(err){
    res.json(err);
  });
});

module.exports = router;
