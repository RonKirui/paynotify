const Transaction = require("../models/Transaction")

exports.createTrancaction = async (req, res)=>{
    try {
        const { merchantRequestId, checkoutRequestId, phoneNumber, amount, mpesaReceiptNumber, transactionDate,resultCode, resultDesc, status, rawCallback } = req.body

        const transaction = await Transaction.create({merchantRequestId, checkoutRequestId, 
            phoneNumber, amount, mpesaReceiptNumber, transactionDate,resultCode, 
            resultDesc, status, rawCallback})
        res.json({ success: true, transaction });
  } catch (err) {
        res.status(400).json({ success: false, message: err.message });
  }
};