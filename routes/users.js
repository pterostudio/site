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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
