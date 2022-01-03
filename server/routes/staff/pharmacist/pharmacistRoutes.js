const express = require("express");
const router = express.Router();
const pharmacistController = require("../../../controllers/staff/pharmacist/pharmacistController");

// --- PHARMACIST ROUTES ---

router.post("/", pharmacistController.pharmacist_medicine_post);

module.exports = router;
