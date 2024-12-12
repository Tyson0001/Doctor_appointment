const express = require('express');

const colors = require('colors');
const { loginController } = require('../controllers/userCtrl');

// routes injection
const router = express.Router();

//routes
// login || Post

router.post('/login', loginController);

// register
router.post('/register', registerController);

module.exports = router