/*
    NAME : EMIS - API 
    DB connectivityconfiguration file
    Version : V1
    Author : Tom  
    modified : Suganthi 
    Date : 22/02/23 
*/
'use strict'; 
require('dotenv').config();
const config =  require('./config.js');
const mySQL = require('mysql');

//local mysql db connection
const dbConn = mySQL.createConnection({
  host     : config.DB_HOST,
  user     : config.DB_USER,
  password : config.DB_PASSWORD,
  database : config.DB_NAME,
});

dbConn.connect((err)=> {
  if(!err)
    console.log('Connection Established Successfully');
  else
     console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
  });

module.exports = dbConn;
