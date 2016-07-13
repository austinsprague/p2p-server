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

router.get('/backed/:id', function (req, res) {
  queries.UserProjBacked().where({ proj_id: req.params.id }).then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.post('/charge/:id', function (req, res) {
  console.log('this is req', req.body);
  queries.UserProjBacked().insert({
      backer_id: req.body.backer_id,
      proj_id: req.body.proj_id,
      amt_pledged: req.body.amount,
      user_id: req.body.user_id
  }).then(function(data){
    console.log(data);
    console.log('body is :', req.body);
    // return helpers.stripeCharge(req.body).then(function(data){
    //   res.json('successful user backed');
    // })
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

module.exports = router;
