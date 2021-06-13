// managing login authentication routes

// importing express
const express = require('express');

// importing express router
const router = express.Router();

// importing the controller
const authController = require('../controllers/auth')

// /login => GET
router.get('/login', authController.getLogin)

// /login => POST
router.post('/login', authController.postLogin)

// exporting the router 
module.exports = router;