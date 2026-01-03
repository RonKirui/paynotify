import mongoose from "mongoose";

const schema = new mongoose.Schema({
  transactionType: String,
  transID: { type: String, unique: true },
  transTime: String,
  amount: Number,
  shortCode: String,
  billRefNumber: String,
  phoneNumber: String,
  rawPayload: Object
}, { timestamps: true });

export default mongoose.model("C2BTransaction", schema);
