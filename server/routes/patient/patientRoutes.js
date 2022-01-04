const express = require("express");
const router = express.Router();
const patientController = require("../../controllers/patient/patientController");

// --- PATIENT ROUTES ---

// handle post requests
router.post("/register", patientController.patient_register);
router.post("/login", patientController.patient_login);
router.post("/appointment", patientController.patient_appointment_post);

// handle get requests
router.get("/", patientController.patient_index);
router.get("/history/:id", patientController.patient_history_get);

module.exports = router;
