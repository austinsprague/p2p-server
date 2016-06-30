var express = require('express');
var router = express.Router();
var users = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.use('/users', users);
module.exports = router;
