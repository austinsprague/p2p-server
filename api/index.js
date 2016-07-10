var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.use('/projects', require('./projects'));
router.use('/users', require('./users'));
router.use('/user_projects', require('./user_projects'));
router.use('/signup', require('./signup'));
router.use('/profile', require('./profile'));
router.use('/newaccount', require('./newaccount'));

// router.get('/', function(req, res){
//   if (req.user.id) {
//     res.json(req.user.id);
//   }
// })

module.exports = router;
