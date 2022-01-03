const express = require("express");
const router = express.Router();
const labAssistantController = require("../../../controllers/staff/labassistant/labAssistantController");

// --- LAB-ASSISTANT ROUTES ---

router.post("/", labAssistantController.labAssistant_test_post);

module.exports = router;
