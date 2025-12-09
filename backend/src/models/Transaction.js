const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    merchantRequestId: String,
    checkoutRequestId: String,
    phoneNumber: String,
    amount: Number,
    mpesaReceiptNumber: String,
    transactionDate: Date,

    resultCode: String,
    resultDesc: String,

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending"
    },

    rawCallback: { type: Object }, // save full callback JSON
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
