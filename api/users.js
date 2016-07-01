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
    name: 'Betty',
    address: '111 Pine St, SF CA',
    phone_num: 2069991123,
    background: 'Ultimate baking champion',
    username: 'betty_shop',
    password: '123456',
    credit_card: 1111222333444,
    cvv: 123,
    exp: 0219,
    zip: 99999
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
    password: '123456',
    credit_card: 1111222333444,
    cvv: 123,
    exp: 0219,
    zip: 99999
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
