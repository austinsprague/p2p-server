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
    
  }).then(function(){
    res.json('success');
  }).catch(function(err){
    res.json(err);
  })
});


module.exports = router;
