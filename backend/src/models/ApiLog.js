const mongoose = require("mongoose");

const ApiLogSchema = new mongoose.Schema(
  {
    endpoint: String,
    method: String,
    data: { type: Object }, // full JSON or body
  },
  { timestamps: true }
);

module.exports = mongoose.model("ApiLog", ApiLogSchema);
