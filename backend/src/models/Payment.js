const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    amount: {type: Number, required: true},
    paidAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model("Payment", paymentSchema);