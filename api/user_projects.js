var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.get('/', function (req, res) {
  queries.UserProjects().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.get('/:id', function (req, res) {
  queries.UserProjects().where({ user_id: req.params.id }).first().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.post('/', function(req, res){
  console.log(req.body);
  queries.Users().insert({
    first_name: 'NEW',
    last_name: 'user',
    address: '111 Pine St',
    city: 'SF',
    state: 'CA',
    phone_num: 2069991123,
    background: 'Garlic lover',
    email: 'guy@yahoo.com',
    pwd: '123456'
  }).then(function(){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  })
});

router.post('/:id/charge', function (req, res) {
  console.log(req.body);
  queries.UserProjects().where({ user_id: req.params.id }).update({
    token: req.body.token
  }).then(function(data){
    res.json('successful update');
  }).catch(function(err){
    res.json(err);
  });
});

module.exports = router;
