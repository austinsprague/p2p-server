var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.post('/', function(req, res){
  queries.Users().insert({
    name: req.body.name,
    address: '111 Pine St, SF CA',
    phone_num: 2069991123,
    background: 'Ultimate baking champion',
    username: req.body.email,
    password: req.body.pwd,
    credit_card: 1111222333444,
  }).then(function(){
    res.json('success');
  }).catch(function(err){
    res.json(err);
  });
});



module.exports = router;
