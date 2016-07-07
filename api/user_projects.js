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

// router.get('/:id', function (req, res) {
//   queries.UserProjBacked().where({ user_id: req.params.id }).first().then(function(data){
//     res.json(data);
//   }).catch(function(err){
//     res.json(err);
//   });
// });

router.post('/:id/charge', function (req, res) {
  // console.log(req.body);;

  helpers.stripeCharge(req.body).then(function(data){
    res.json('successful user backed');
  }).catch(function(err){
    res.json(err);
  });
});

module.exports = router;
