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

router.post('/', function(req, res){
  queries.Users().insert({
    first_name: 'Barney',
    last_name: 'Rubble',
    address: '111 Pine St',
    city: 'Seattle',
    state: 'WA',
    phone_num: 2069991123,
    background: 'Garlic lover',
    email: 'guy@yahoo.com',
    pwd: '123456'
  }).then(function(){
    res.json('success');
  }).catch(function(err){
    res.json(err);
  })
});

router.get('/:id', function (req, res) {
  queries.Users().where({ id: req.params.id }).first().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.get('/:id/update', function (req, res) {
  queries.Users().where({ id: req.params.id }).first().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.put('/:id/update', function (req, res) {
  queries.Users().where({ id: req.params.id }).update({
    name: 'Betty Boop',
    address: '111 Pine St, SF CA',
    phone_num: 2069991123,
    background: 'Ultimate baking champion',
    username: 'betty_shop',
    password: '123456'
  }).then(function(data){
    res.json('successful update');
  }).catch(function(err){
    res.json(err);
  });
});

router.get('/:id/charge', function (req, res) {
  queries.Users().where({ id: req.params.id }).first().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.put('/:id/charge', function (req, res) {
  queries.Users().where({ id: req.params.id }).update({
    token: req.body.token
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
