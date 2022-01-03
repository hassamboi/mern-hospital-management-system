const express = require("express");
const router = express.Router();
const cashierController = require("../../../controllers/staff/cashier/cashierController");

// --- CASHIER ROUTES ---

router.put("/", cashierController.cashier_bill_put);

module.exports = router;
