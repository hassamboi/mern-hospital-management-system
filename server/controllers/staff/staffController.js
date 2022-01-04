const Staff = require("../../models/Staff");
const Patient = require("../../models/Patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// controller to authenticate and log in a staff member
const staff_login = (req, res) => {
  const { email, password } = req.body;

  // check if the email is already registered
  Staff.findOne({ email }).then(staff => {
    if (!staff) return res.status(409).json({ msg: "staff member does not exist" });

    // validate password sent by the client
    bcrypt.compare(password, staff.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      // generate token and send payload with token as a response back
      jwt.sign({ id: staff.id }, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;

        res.json({
          token,
          user: {
            id: staff.id,
            name: staff.name,
            email: staff.email,
            jobTitle: staff.job_title,
            isStaff: true,
          },
        });
      });
    });
  });
};

// controller to register a staff member
const staff_register = (req, res) => {
  const { name, email, password, age, gender, address, dob, phone, joining_date, education, department, job_title } =
    req.body;

  // check if the email is already registered
  Staff.findOne({ email }).then(staff => {
    if (staff) return res.status(409).json({ msg: "Email already registered" });

    // else create new instance of staff for registration
    const newStaff = new Staff({
      name,
      email,
      password,
      age,
      gender,
      address,
      dob,
      phone,
      joining_date,
      education,
      department,
      job_title,
    });

    // create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newStaff.password, salt, (err, hash) => {
        if (err) return res.status(400).json({ msg: "Invalid data received" });

        newStaff.password = hash;

        // register the staff and return the data as response
        newStaff.save().then(staff => {
          jwt.sign({ id: staff.id }, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;

            res.json({
              token,
              user: {
                id: staff.id,
                name: staff.name,
                email: staff.email,
                jobTitle: staff.job_title,
                isStaff: false,
              },
            });
          });
        });
      });
    });
  });
};

const staff_history_get = (req, res) => {
  // get the patient email and return its data
  const email = req.params.email;

  // return the patient's data except for the password
  Patient.findOne({ email })
    .select("medical_records -_id")
    .then(patient => res.json(patient));
};

const staff_index = (req, res) => {
  // get staff member data
  const { id } = req.body;

  // return the user's data except for the password
  Staff.findById(id)
    .select("-password")
    .then(staff => res.json(staff));
};

module.exports = { staff_login, staff_register, staff_history_get, staff_index };
