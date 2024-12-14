const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController, 
  getAllNotificationController,
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

//APply Doctor || POST
router.post("/get-all-notification", authMiddlewares, getAllNotificationController);

module.exports = router;
