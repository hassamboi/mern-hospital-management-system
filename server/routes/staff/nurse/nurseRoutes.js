const express = require("express");
const router = express.Router();
const nurseController = require("../../../controllers/staff/nurse/nurseController");

// --- NURSE ROUTES ---

router.post("/", nurseController.nurse_examination_post);

module.exports = router;
