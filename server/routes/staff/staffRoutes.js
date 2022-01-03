const express = require("express");
const router = express.Router();
const staffController = require("../../controllers/staff/staffController");

// --- STAFF ROUTES ---

// login staff
router.post("/login", staffController.staff_login);

// get patient history
router.get("/history", staffController.staff_history_get);

// specific routes for each staff member
router.use("/doctor", require("./doctor/doctorRoutes"));
router.use("/labassistant", require("./labassistant/labAssistantRoutes"));
router.use("/cashier", require("./cashier/cashierRoutes"));
router.use("/pharmacist", require("./pharmacist/pharmacistRoutes"));
router.use("/receptionist", require("./receptionist/receptionistRoutes"));
router.use("/nurse", require("./nurse/nurseRoutes"));

module.exports = router;
