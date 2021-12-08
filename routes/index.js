'use strict'

/* 
/ pterostudio/site
/ ----------------
/ Last Updated 08/12/21
/ https://github.com/pterostudio/site
/ 
*/

// Let's import our dependencies for this
// application and  import the Router
// element from our Express dependency.
var express = require('express');
var router = express.Router();

// This is a GET request for the homepage
// of our application. This simply calls
// a render function to send the data to
// the client visiting our site.
router.get('/', function(req, res, next) {
  res.render('index', { title: /* We can declare page variables here. */ 'Express' });
});

module.exports = router;
