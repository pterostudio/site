'use strict'

/* 
/ pterostudio/site
/ ----------------
/ Last Updated 08/12/21
/ https://github.com/pterostudio/site
/ 
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
