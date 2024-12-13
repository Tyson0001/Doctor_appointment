const express = require('express');

const colors = require('colors');
const { loginController,registerController,authController } = require('../controllers/userCtrl');
const authMiddlewares = require('../middlewares/authMiddlewares');

// routes injection
const router = express.Router();

//routes
// login || Post

router.post('/login', loginController);

// register
router.post('/register', registerController);


//auth||post
router.post('/getUserData',authMiddlewares,authController)
module.exports = router