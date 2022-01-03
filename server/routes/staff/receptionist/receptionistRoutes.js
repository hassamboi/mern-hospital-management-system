const express = require("express");
const router = express.Router();
const receptionistController = require("../../../controllers/staff/receptionist/receptionistController");

// --- RECEPTIONIST ROUTES ---

router.put("/", receptionistController.receptionist_appointment_put);

module.exports = router;
