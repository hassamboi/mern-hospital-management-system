const Staff = require("../../models/Staff");
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
            job_title: staff.job_title,
            isStaff: true,
          },
        });
      });
    });
  });
};

const staff_history_get = (req, res) => {
  // get the patient email and return its data
};

module.exports = { staff_login, staff_history_get };
