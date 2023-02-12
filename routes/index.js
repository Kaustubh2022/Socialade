const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controllers')


//To check if this file is loading successfully
console.log("router loaded");


router.get('/',homeController.home);

//to route for the users section
router.use('/users',require('./users'));


//For any further routes , access from here
//router.use('/routerName,require('./routerFile));
router.use('/posts',require('./post'));



module.exports = router;

