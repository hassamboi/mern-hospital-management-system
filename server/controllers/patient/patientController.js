const Patient = require("../../models/Patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// controller to register a patient
const patient_register = (req, res) => {
  const { name, email, password, age, gender, address, dob, phone } = req.body;
  console.log(req.body);

  // check if the email is already registered
  Patient.findOne({ email }).then(patient => {
    if (patient) return res.status(409).json({ msg: "Email already registered" });

    // else create new instance of patient for registration
    const newPatient = new Patient({
      name,
      email,
      password,
      age,
      gender,
      address,
      dob,
      phone,
      medical_records: [],
    });

    // create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newPatient.password, salt, (err, hash) => {
        if (err) return res.status(400).json({ msg: "Invalid data received" });

        newPatient.password = hash;

        // register the patient and return the data as response
        newPatient.save().then(patient => {
          jwt.sign({ id: patient.id }, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;

            res.json({
              token,
              user: {
                id: patient.id,
                name: patient.name,
                email: patient.email,
                isStaff: false,
              },
            });
          });
        });
      });
    });
  });
};

// controller to authenticate and log in a patient
const patient_login = (req, res) => {
  const { email, password } = req.body;

  // check if the email is already registered
  Patient.findOne({ email }).then(patient => {
    if (!patient) return res.status(409).json({ msg: "patient does not exist" });

    // validate password sent by the client
    bcrypt.compare(password, patient.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      // generate token and send payload with token as a response back
      jwt.sign({ id: patient.id }, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;

        res.json({
          token,
          user: {
            id: patient.id,
            name: patient.name,
            email: patient.email,
            isStaff: false,
          },
        });
      });
    });
  });
};
// patient_appointment_post, patient_appointment_get, patient_record_get

const patient_appointment_post = (req, res) => {
  // create an appointment for patient
  const { id, date, description } = req.body;
  const newRecord = { appointment_details: { date, description } };
  console.log(newRecord);
  Patient.findByIdAndUpdate(id, { $push: { medical_records: newRecord } }, (error, success) =>
    error ? res.status(400).json({ msg: "Something went wrong" }) : res.json({ msg: "Appointment booked successfully" })
  );
};

const patient_index = (req, res) => {
  // get patient data
  const { id } = req.body;

  // return the patient's data except for the password
  Patient.findById(id)
    .select("-password")
    .then(patient => res.json(patient));
};

const patient_history_get = (req, res) => {
  // get patient data
  const id = req.params.id;
  // return the patient's data except for the password
  Patient.findById(id)
    .select("medical_records -_id")
    .then(patient => res.json(patient));
};

// exporting the controllers
module.exports = {
  patient_register,
  patient_login,
  patient_appointment_post,
  patient_index,
  patient_history_get,
};
