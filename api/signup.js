var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
var helpers = require('./helpers')

// router.post('/', function(req, res){
//   console.log(req.body);
//   var token = req.body.token;
//   queries.Users().returning('id').insert({
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     address: '111 Pine St',
//     city: req.body.city,
//     state: req.body.state,
//     phone_num: req.body.phone_num,
//     background: 'Garlic lover',
//     email: req.body.email,
//     pwd: req.body.pwd,
//     token: customer.id
//   }).then(function(id){
//     console.log(id);
//     return helpers.stripeCustCreate(token).then(function(customer) {
//       console.log('customer Id: ' + customer.id);
//       queries.Users().where({ id: id }).update({
//         background: customer.id
//       }).then(function(data){
//         return data;
//       })
//     })
//   }).catch(function(err){
//     console.log('error', err);
//     res.json(err);
//   })
// });


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
      background: 'Garlic lover',
      email: req.body.email,
      pwd: req.body.pwd,
      account_id: customer.id
    }).then(function(data){
      res.json(data)
    })
  }).catch(function(err){
    console.log('error', err);
    res.json(err);
  })
});



module.exports = router;
