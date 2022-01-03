const Patient = require("../../../models/Patient");

const cashier_bill_post = (req, res) => {
  // get the patient email and recordId and update its payment details
  const { email, index, total, issue_date, due_date, tax_rate, bill_items, generated_by } = req.body;
  const newPaymentDetails = { total, issue_date, due_date, tax_rate, bill_items, generated_by };

  Patient.findOne({ email }, function (error, document) {
    if (error) return res.status(400).json({ msg: "Something went wrong" });
    document.medical_records[index].payment_details = newPaymentDetails;
    document.markModified("medical_records");
    document
      .save()
      .then(data => res.json({ msg: "Successfully added payment details" }))
      .catch(err => res.status(400).json({ msg: "Something went wrong" }));
  });
};

module.exports = { cashier_bill_post };
