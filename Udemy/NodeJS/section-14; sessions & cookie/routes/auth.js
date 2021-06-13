// managing login authentication routes

// importing express
const express = require('express');

// importing express router
const router = express.Router();

// importing the controller
const authController = require('../controllers/auth')

// /login => GET
router.get('/login', authController.getLogin)

// exporting the router 
module.exports = router;