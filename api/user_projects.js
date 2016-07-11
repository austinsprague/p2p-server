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
    return helpers.stripeCharge(req.body).then(function(data){
      res.json('successful user backed');
    })
  }).catch(function(err){
    res.json(err);
  });
});
// "id": 1,
//     "user_id": 3,
//     "rec_stripe_cust_id": null,
//     "charge_stripe_cust_id": null,
//     "proj_id": null,
//     "amt_pledged": null,
//     "date_backed": null,
//     "order_id": null,
//     "backer_token": null,
//     "funds_captured": null

// router.post('/:id/transfer', function (req, res) {
//   var rec_stripe_cust_id = 'cus_8mFM4nk8k86TKa';
//   queries.UserProjBacked().select().where({proj_id: req.params.id})
//   .then(function(data){
//     data.forEach(function(backer) {
//       return stripe.recipients.create({
//         name: 'Jon Doe',
//         type: 'individual',
//         card: rec_stripe_cust_id
//       })
//     })
//     return data;
//   })
// })
// });

module.exports = router;
