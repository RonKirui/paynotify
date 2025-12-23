const axios = require("axios");
const StkRequest = require("../models/StkRequest");
const Transaction = require("../models/Transaction");
const NotificationController = require("./notificationController");

// 1️⃣ Initiate STK Push
exports.initiatePayment = async (req, res) => {
  try {
    const { phoneNumber, amount } = req.body;

    // Save initial request
    const stk = await StkRequest.create({
      phoneNumber,
      amount,
      status: "initiated",
    });

    /**
     * 🔹 REAL MPesa integration will go here
     * For now, we simulate success
     */

    res.status(200).json({
      success: true,
      message: "Payment request sent",
      stkRequestId: stk._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2️⃣ MPesa Callback Handler
exports.paymentCallback = async (req, res) => {
  try {
    const callback = req.body.Body.stkCallback;

    const transaction = await Transaction.create({
      merchantRequestId: callback.MerchantRequestID,
      checkoutRequestId: callback.CheckoutRequestID,
      resultCode: callback.ResultCode,
      resultDesc: callback.ResultDesc,
      status: callback.ResultCode === 0 ? "success" : "failed",
      rawCallback: req.body,
    });

    // 🔔 Send notification
    await NotificationController.sendPaymentNotification(transaction);

    res.json({
      ResultCode: 0,
      ResultDesc: "Payment callback processed",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
