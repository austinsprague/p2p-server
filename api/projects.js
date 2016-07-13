var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.get('/', function (req, res) {
  queries.Projects().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.get('/:id', function (req, res) {
  queries.Projects().where({ id: req.params.id }).first().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.get('/user/:id', function (req, res) {
  queries.Projects().where({ user_id: req.params.id }).then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.post('/insert/:id', function(req, res){
  console.log(req.body);
  queries.Projects().insert({
    company_name: req.body.company_name,
    user_id: req.user.id,
    img_url: req.body.img_url,
    category: req.body.category,
    neighborhood: req.body.neighborhood,
    pitch: req.body.pitch,
    targ_mkt: req.body.targ_mkt,
    uniq_comp: req.body.uniq_comp,
    history: req.body.history,
    use_of_funds: req.body.use_of_funds,
    date_created: '',
    date_exp: '',
    status: 'active',
    date_created: '',
    amt_req: req.body.amt_req
  }).then(function(){
    console.log('successful insert');
    res.json('success');
  }).catch(function(err){
    res.json(err);
  })
});

router.put('/update/:id', function (req, res) {
  queries.Projects().where({ id: req.params.id }).update({
    company_name: req.body.company_name,
    user_id: req.params.id,
    img_url: req.body.img_url,
    // desc: req.body.desc,
    category: req.body.category,
    // city: req.body.city,
    neighborhood: req.body.neighborhood,
    pitch: req.body.pitch,
    targ_mkt: req.body.targ_mkt,
    uniq_comp: req.body.uniq_comp,
    history: req.body.history,
    use_of_funds: req.body.use_of_funds,
    date_created: req.body.date_created,
    date_exp: req.body.date_exp,
    status: req.body.status,
    date_created: req.body.date_created,
    amt_req: req.body.amt_req
  }).then(function(data){
    res.json('successful update');
    res.redirect(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.delete('/delete/:id', function(req, res) {
  queries.Projects().where({ id: req.params.id }).del().then(function(){
    res.json('successful delete');
  }).catch(function(err){
    res.json(err);
  });
});

module.exports = router;
