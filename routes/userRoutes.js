const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController, 
} = require("../controllers/userCtrl");
const authMiddlewares = require("../middlewares/authMiddlewares");

const router = express.Router();

// User login route
router.post("/login", loginController);

// User registration route
router.post("/register", registerController);

// Fetch user data (Protected route)
router.post("/getUserData", authMiddlewares, authController);

//APply Doctor || POST
router.post("/apply-doctor", authMiddlewares, applyDoctorController);

module.exports = router;
