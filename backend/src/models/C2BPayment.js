const mongoose = require("mongoose");

const C2BPaymentSchema = new mongoose.Schema(
  {
    transactionType: String,
    transID: String,
    transTime: Date,
    transAmount: Number,

    businessShortCode: String,
    billRefNumber: String,
    invoiceNumber: String,

    msisdn: String,
    firstName: String,
    middleName: String,
    lastName: String,

    rawCallback: { type: Object },
  },
  { timestamps: true }
);

module.exports = mongoose.model("C2BPayment", C2BPaymentSchema);
