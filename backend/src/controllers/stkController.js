const StkRequest = require("../models/StkRequest");
const Transaction = require("../models/Transaction");

exports.initiateStk = async (req, res) => {
  try {
    const { phoneNumber, amount } = req.body;

    const stkRequest = await StkRequest.create({
      phoneNumber,
      amount,
      status: "initiated",
    });

    // ⚠️ MPesa API integration goes here later

    res.json({
      success: true,
      message: "STK Push initiated (demo)",
      stkRequest,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.stkCallback = async (req, res) => {
  try {
    const callback = req.body.Body.stkCallback;

    await Transaction.create({
      merchantRequestId: callback.MerchantRequestID,
      checkoutRequestId: callback.CheckoutRequestID,
      resultCode: callback.ResultCode,
      resultDesc: callback.ResultDesc,
      status: callback.ResultCode === 0 ? "success" : "failed",
      rawCallback: req.body,
    });

    res.json({
      ResultCode: 0,
      ResultDesc: "Callback received successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
