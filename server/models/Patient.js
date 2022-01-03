const mongoose = require("mongoose");

// schema for a single bill item (used in patient->medical_records->payment_details)
const billItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

// schema for a single test (used in patient->medical_records->test_report)
const testSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  result: { type: Boolean, required: true },
});

// schema for a single medicine (used in patient->medical_records->medicines)
const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dosage_mg: { type: Number, required: true },
  timings: { type: String, required: true },
  prepared_by: { type: String, required: true },
});

// schema to store all medical records for patients (used in patient)
const medicalRecordSchema = new mongoose.Schema({
  appointment_details: {
    clinicNumber: { type: Number, required: true, default: 0 },
    date: { type: Date, required: true },
    description: { type: String, required: true },
  },
  prescription: {
    doctor_comments: { type: String, required: true },
    medicines: [medicineSchema],
    given_by: { type: String, required: true },
    date: { type: Date, required: true },
  },
  test_report: {
    comments: { type: String, required: true },
    tests: [testSchema],
    generated_by: { type: String, required: true },
  },
  payment_details: {
    total: { type: Number, required: true },
    issue_date: { type: Date, required: true },
    due_date: { type: Date, required: true },
    tax_rate: { type: Number, required: true },
    bill_items: [billItemSchema],
    generated_by: { type: String, required: true },
  },
});

// patient schema
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  phone: { type: String, maxlength: 11 },
  medical_records: [medicalRecordSchema],
  register_date: { type: Date, default: Date.now },
});

// exporting the Patient model created on collection "patients"
const Patient = new mongoose.model("patient", patientSchema);
module.exports = Patient;
