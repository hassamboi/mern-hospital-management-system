const express = require("express");
const router = express.Router();
const cashierController = require("../../../controllers/staff/cashier/cashierController");

// --- CASHIER ROUTES ---

router.post("/", cashierController.cashier_bill_post);

module.exports = router;
