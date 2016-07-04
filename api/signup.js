var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.get('/', function (req, res) {
  queries.Users().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.get('/login', function(req, res) {
  res.json('login get');
});

router.get('/profile', function(req, res) {
  res.json('login get');
})

router.post('/', function(req, res){
  queries.Users().insert({
    name: req.body.name,
    address: '111 Pine St, SF CA',
    phone_num: 2069991123,
    background: 'Ultimate baking champion',
    username: req.body.email,
    password: req.body.pwd,
    credit_card: 1111222333444,
    cvv: 123,
    exp: 0219,
    zip: 99999
  }).then(function(){
    res.json('success');
  }).catch(function(err){
    res.json(err);
  });
});

module.exports = router;
