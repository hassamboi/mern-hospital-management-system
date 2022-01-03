const express = require("express");
const router = express.Router();
const doctorController = require("../../../controllers/staff/doctor/doctorController");

// --- DOCTOR ROUTES ---

router.put("/", doctorController.doctor_prescription_put);

module.exports = router;
