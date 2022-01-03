const express = require("express");
const router = express.Router();
const pharmacistController = require("../../../controllers/staff/pharmacist/pharmacistController");

// --- PHARMACIST ROUTES ---

router.put("/", pharmacistController.pharmacist_medicine_put);

module.exports = router;
