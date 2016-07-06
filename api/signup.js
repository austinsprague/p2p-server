var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
var helpers = require('./helpers')

router.post('/', function(req, res){
  var token = req.body.token;
  queries.UserProjBacked().insert({
    user_id: 7,
    proj_id: 1,
    amt_pledged: 11,
    date_backed: 'may 11',
    order_id: 6,
    token: token
  }).then(function(){
    return helpers.stripeCustCreate(token).then(function(customer) {
      queries.Users().
      res.json(data);
    });
  }).catch(function(err){
    console.log('error', err);
    res.json(err);
  })
});



module.exports = router;
