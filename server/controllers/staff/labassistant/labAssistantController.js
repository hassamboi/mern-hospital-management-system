const Patient = require("../../../models/Patient");

const labAssistant_test_post = (req, res) => {
  // get the patient and record index and update its test details
  const { email, index, comments, tests, generated_by } = req.body;
  const newTestReport = { comments, tests, generated_by };

  Patient.findOne({ email }, function (error, document) {
    if (error) return res.status(400).json({ msg: "Something went wrong" });
    document.medical_records[index].test_report = newTestReport;
    document.markModified("medical_records");
    document
      .save()
      .then(data => res.json({ msg: "Successfully added test report and details" }))
      .catch(err => res.status(400).json({ msg: "Something went wrong" }));
  });
};

module.exports = { labAssistant_test_post };
