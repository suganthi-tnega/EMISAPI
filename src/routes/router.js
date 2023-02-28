/*
    NAME : EMIS - API - Router layout
    Version : V1
    Author : Tom  
    modified : Suganthi 
    Date : 22/02/23 
*/
'use strict';
//* Import express and initialize the routers
const express = require('express')
const router = express.Router();
//* Call the controller with the methods
const emisController =   require('../controllers/controller');

//* Here I defined the methods 
router.get('/', emisController.getInfo);
router.get('/byAadhaarID/:id', emisController.getByAadhaarID);
router.get('/byEmisID/:id', emisController.getByEmisID);
router.get('/byPhoneNo/:id', emisController.getByPhoneNo);

//internal purpose we have to check the API 
router.get('/getInfo', emisController.getInfo);
router.get('/checkStagingURL', emisController.getStagingURL);

module.exports = router;
