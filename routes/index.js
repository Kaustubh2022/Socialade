const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controllers')



//To check if this file is loading successfully
console.log("router loaded");


router.get('/',homeController.home);

//to route for the profile section
// router.get('/profile',homeController.profile);

module.exports = router;

