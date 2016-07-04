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
// router.get('/:id', function (req, res) {
//   queries.UsersById(req.params.id).first().then(function(data){
//     res.json(data);
//   }).catch(function(err){
//     res.json(err);
//   });
// });
router.get('/backed', function (req, res) {
  queries.UserBacked().then(function(data){
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

// __________get backed projects which user has donated
router.get('/:id/backed', function (req, res) {
  queries.UserBacked().where({ user_id: req.params.id }).then(function(data){
    res.json(data);
  }).catch(function(err){
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
