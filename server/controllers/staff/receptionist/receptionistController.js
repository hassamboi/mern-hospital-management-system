const Patient = require("../../../models/Patient");

const receptionist_appointment_post = (req, res) => {
  // get the patient and record index and update its appointment details
  const { email, index, clinicNumber } = req.body;

  Patient.findOne({ email }, function (error, document) {
    if (error) return res.status(400).json({ msg: "Something went wrong" });
    document.medical_records[index].appointment_details.clinicNumber = clinicNumber;
    document.markModified("medical_records");
    document
      .save()
      .then(data => res.json({ msg: "Successfully added clinic number to appointment" }))
      .catch(err => res.status(400).json({ msg: "Something went wrong" }));
  });
};

module.exports = { receptionist_appointment_post };
