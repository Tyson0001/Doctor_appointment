const express = require("express");
const {
  doctorloginController,
  doctorregisterController,
  doctorauthController,
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl.js");
const authMiddleware = require("../middlewares/authMiddlewares.js");
const router = express.Router();

//LOGIN || POST
router.post("/login", doctorloginController);

// POST request for doctor registration
router.post("/doctorregister", doctorregisterController);

//Auth || POST
router.post("/getUserData", authMiddleware, doctorauthController);

//POST SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//GET Appointments
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController    // 
);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
