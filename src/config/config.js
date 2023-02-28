/*
    NAME : EMIS - API 
    Custom environment configuration file - config.js
    Version : V1
    Author : Tom  
    modified : Suganthi 
    Date : 22/02/23 
*/
'use Strict'
const dotenv = require('dotenv');
const path = require('path');
require('dotenv').config();
const { logger } = require('../utils/logger');
env = process.env.NODE_ENV
//console.log("testing Env : ", env)
logger.info(`EMIS API Running env : ${env}`);
const config_temp = {
    default: {
        port: 7000,
        mysql_host: "localhost",
        logging_level: 5,
        secret_api_key: process.env.SECRET_API_KEY,
        issuer : 'TNeGA',
        subject : 'TNeGA-EMIS',
        mail:'emisadmin@XXXX.com',
        BASE_URL:'',
        APPLICATION_ROOT:'',
        APIENDPOINT_BASE:'/API/V1/EMIS'
    },
    development: {
        logging_level: 10,
        NODE_PORT: 7000,
        DB_HOST: "localhost",
        DB_USER: "root",
        DB_PASSWORD: "root",
        DB_NAME: "emisdb",
        URL:"http://localhost:${NODE_PORT}",
        REDIRECT_URL :'http://192.168.4.241'       
    },
    staging: {
        logging_level: 10,
        NODE_PORT: 7000,
        DB_HOST: "localhost",
        DB_USER: "root",
        DB_PASSWORD: "root",
        DB_NAME: "emisdb",
        URL:"${BASE_URL}:${NODE_PORT}",
    },
    production: {
        port: 3001,        
        DB_HOST: "localhost",
        DB_USER: "root",
        DB_PASSWORD: "root",
        DB_NAME: "emisdb",
        URL:"${BASE_URL}:${NODE_PORT}",
    }
};
const config = {
    ...config_temp.default,
    ...config_temp[env]
}
module.exports = config;