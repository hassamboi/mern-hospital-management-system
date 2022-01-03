const express = require("express");
const router = express.Router();
const nurseController = require("../../../controllers/staff/nurse/nurseController");

// --- NURSE ROUTES ---

router.put("/", nurseController.nurse_examination_put);

module.exports = router;
