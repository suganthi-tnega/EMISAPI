/*
    NAME : EMIS - API
    Version : V1
    Author : Tom  
    modified : Suganthi 
    Date : 22/02/23 
*/
'use Strict'
const config =  require('./config/config.js');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require("compression");
const cors = require("cors");

// create express app
const app = express();

// HTTP header security
const helmet = require('helmet');
app.use(helmet());

const db = require('./config/db.config')

// Enable CORS for all routes
let corsOptions = {
  // origin: process.env.URL
  origin: '*',
  allowMethods: ['GET', 'POST', 'PATCH', 'PUT'],
  allowHeaders: ['Content-Type', 'Accept'],
};
app.use(cors(corsOptions));
// compress all responses
app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.redirect(`${process.env.REDIRECT_URL}`);
});

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

// handle undefined Routes
app.use('*', (err, req, res, next) => {
  const statusCode = err.statusCode || 404;
  res.status(statusCode).json({ message: 'undefined route' });
  next(err, req, res, next);
});

// api routes
const Routes = require('./routes/router')

// using as middleware
app.use(config.APIENDPOINT_BASE, Routes)

module.exports = app;