/*
    NAME : EMIS - API
    Version : V1
    Author : Tom  
    modified : Suganthi 
    Date : 22/02/23 
*/
'use Strict'
const config =  require('./config/config.js');
require('dotenv').config();
//console.log(`qqqqcheckingNODE_ENV=${JSON.stringify(config)}`);
const app = require('./server');
const { logger } = require('./utils/logger');
// Setup server port
const PORT = config.NODE_PORT ;

// listen for requests  or start server
app.listen(PORT, () => {
    logger.info(`EMIS API Running on PORT ${PORT}`);
});


