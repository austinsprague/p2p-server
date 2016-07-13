var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


// __________getting projects which user has created
router.get('/:id/projects', function (req, res) {
  queries.UserProjects().where({ user_id: req.params.id }).then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.get('/backed/:id', function (req, res) {
  queries.UserBacked().where({ backer_id: req.params.id })
  .then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});


module.exports = router;
