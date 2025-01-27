const express = require("express");
const {
  doctorloginController,
  doctorregisterController,
  authController,
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl.js");
const authMiddleware = require("../middlewares/authMiddlewares.js");

const router = express.Router();

// Doctor login
router.post("/login", doctorloginController);

// Doctor register
router.post("/doctorregister", doctorregisterController);

// Auth
router.post("/getUserData", authMiddleware, authController);

// Get doctor info
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

// Update doctor profile
router.post("/updateProfile", authMiddleware, updateProfileController);

// Get doctor by ID
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

// Doctor appointments
router.get("/doctor-appointments", authMiddleware, doctorAppointmentsController);

// Update appointment status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;