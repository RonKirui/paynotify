const mongoose = require("mongoose");

const StkRequestSchema = new mongoose.Schema(
  {
    phoneNumber: { type: String, required: true },
    amount: { type: Number, required: true },

    merchantRequestId: String,
    checkoutRequestId: String,

    status: {
      type: String,
      enum: ["initiated", "processing", "success", "failed"],
      default: "initiated",
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("StkRequest", StkRequestSchema);
