const express = require("express");
const router = express.Router();
const receptionistController = require("../../../controllers/staff/receptionist/receptionistController");

// --- RECEPTIONIST ROUTES ---

router.post("/", receptionistController.receptionist_appointment_post);

module.exports = router;
