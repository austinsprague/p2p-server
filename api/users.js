var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
var helpers = require('./helpers');
var stripe = require('stripe')(process.env.STRIPE);

router.get('/', function (req, res) {
  queries.Users().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.get('/:id', function (req, res) {
  queries.Users().where({ id: req.params.id }).first().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.post('/', function(req, res){
  // helpers.stripeCustCreate();np
  queries.Users().insert({
    first_name: 'Hi',
    last_name: 'Ball',
    address: '9000 Crazy Brick Lane',
    city: 'SF',
    state: 'CA',
    phone_num: 4159990909,
    background: 'Garlic lover',
    email: 'dude@yolo.com',
  }).then(function(){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  })
});


router.put('/:id/update', function (req, res) {
  queries.Users().where({ id: req.params.id }).update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    phone_num: req.body.phone_number,
    background: req.body.background,
    email: req.body.email,
  }).then(function(data){
    res.json('successful update');
  }).catch(function(err){
    res.json(err);
  });
});

router.delete('/:id/delete', function(req, res) {
  queries.Users().where({ id: req.params.id }).del().then(function(){
    res.json('successful delete');
  }).catch(function(err){
    res.json(err);
  });
});

module.exports = router;
