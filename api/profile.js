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

router.get('/backed', function (req, res) {
  queries.UserProjBacked().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

// __________getting projects which user has created
router.get('/:id/projects', function (req, res) {
  queries.UserProjects().where({ user_id: req.params.id }).then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

// __________get backed projects which user has BACKED -----NOT WORKING
router.get('/:id/backed', function (req, res) {
  queries.UserProjBacked().where({ user_id: req.params.id })
    .then(function(data){
      console.log(data[0]);
      // return Projects().where({ id: data[0].user_id })
    })
    // .then(function(result) {
    //   res.json(result);
    // })
    .catch(function(err){
      res.json(err);
    });
});



router.post('/:id/backed', function(req, res){
  queries.UserProjBacked().insert({
    user_id: 1,
    proj_id: 2,
    amt_pledged: 10,
    date_backed: "may 30"
  }).then(function(){
    res.json('success');
  }).catch(function(err){
    res.json(err);
  })
});


module.exports = router;
