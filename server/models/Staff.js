const mongoose = require("mongoose");

// staff schema
const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },

  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  phone: { type: String, maxlength: 11 },

  // staff
  joining_date: { type: Date, required: true },
  education: [{ type: String }],

  // designation
  department: { type: String, required: true },
  job_title: { type: String, required: true },

  register_date: { type: Date, default: Date.now },
});

const collectionName = "staff";

// exporting the staff model created on collection "staff"
const Staff = new mongoose.model("staff", staffSchema, collectionName);
module.exports = Staff;
