const express = require("express");
const router = express.Router();
const labAssistantController = require("../../../controllers/staff/labassistant/labAssistantController");

// --- LAB-ASSISTANT ROUTES ---

router.put("/", labAssistantController.labAssistant_test_put);

module.exports = router;
