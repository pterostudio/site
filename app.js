'use strict'

/* 
/ pterostudio/site
/ ----------------
/ Last Updated 08/12/21
/ https://github.com/pterostudio/site
/ 
*/

// Let's get started by importing the dependencies
// we need for this project. It's mainly based around
// a webserver package called Express, which we will
// use in order to run the site.
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// We also need to import our routers, so the app
// knows where to route certain requests.
var indexRouter = require('./routes/index');

// Create the express application to use.
var app = express();

// Setup the view engine for Express to use EJS.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up configurable options for Express to use.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Declare default routes for this application.
app.use('/', indexRouter);

// catch 404 and forward to error handler.
app.use(function(req, res, next) {
  next(createError(404));
});

// This is the application's error handler.
// The purpose of this is to resolve errors
// and get the client or API call to the 
// right place in the application.
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page // code.
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
