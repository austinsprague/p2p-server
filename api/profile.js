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

//__________getting projects which user has created
router.get('/:id', function (req, res) {
  queries.UserProjects().where({ user_id: req.params.id }).first().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

// __________get backed projects which user has donated
router.get('/:id/backed', function (req, res) {
  queries.UserProjects().where({ user_id: req.params.id }).first().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

module.exports = router;
