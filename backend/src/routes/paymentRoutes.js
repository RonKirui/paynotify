const express = require("express");
const {
  initiatePayment,
  paymentCallback,
} = require("../controllers/paymentController");

const router = express.Router();

router.post("/initiate", initiatePayment); // POST /api/payment/initiate
router.post("/callback", paymentCallback); // POST /api/payment/callback

module.exports = router;
