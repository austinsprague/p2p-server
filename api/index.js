var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.use('/projects', require('./projects'));
router.use('/users', require('./users'));


module.exports = router;
