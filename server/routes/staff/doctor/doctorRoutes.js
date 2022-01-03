const express = require("express");
const router = express.Router();
const doctorController = require("../../../controllers/staff/doctor/doctorController");

// --- DOCTOR ROUTES ---

router.post("/", doctorController.doctor_prescription_post);

module.exports = router;
