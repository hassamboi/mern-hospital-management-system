const Patient = require("../../../models/Patient");

const pharmacist_medicine_post = (req, res) => {
  // get the patient and record index and update its medicine within the prescription
  const { email, index, medicines } = req.body;

  Patient.findOne({ email }, function (error, document) {
    if (error) return res.status(400).json({ msg: "Something went wrong" });
    document.medical_records[index].prescription.medicines = medicines;
    document.markModified("medical_records");
    document
      .save()
      .then(data => res.json({ msg: "Successfully added medicines to prescription" }))
      .catch(err => res.status(400).json({ msg: "Something went wrong" }));
  });
};

module.exports = { pharmacist_medicine_post };
