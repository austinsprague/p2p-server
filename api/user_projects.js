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

router.post('/:id/charge', function (req, res) {
  // console.log(req.body);;
  helpers.stripeCharge(req.body).then(function(data){
    res.json('successful user backed');
  }).catch(function(err){
    res.json(err);
  });
});

router.post('/:id/transfer', function (req, res) {
  var rec_stripe_cust_id = 'cus_8mFM4nk8k86TKa';
  queries.UserProjBacked().select().where({proj_id: req.params.id})
  .then(function(data){
    data.forEach(function(backer) {
      return stripe.recipients.create({
        name: 'Jon Doe',
        type: 'individual',
        card: rec_stripe_cust_id
      })
    })
    return data;
  })
})
// });

module.exports = router;
