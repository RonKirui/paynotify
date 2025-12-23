// You can later plug in Twilio, Africa's Talking, SendGrid, etc.

exports.sendPaymentNotification = async (transaction) => {
  try {
    const message =
      transaction.status === "success"
        ? `✅ Payment successful. Ref: ${transaction.mpesaReceiptNumber || "N/A"}`
        : `❌ Payment failed. Reason: ${transaction.resultDesc}`;

    // 🔔 Demo notification (console)
    console.log("🔔 NOTIFICATION:");
    console.log(message);

    /**
     * FUTURE:
     * - sendSMS(phoneNumber, message)
     * - sendEmail(email, message)
     * - sendWebhook(url, payload)
     */

    return true;
  } catch (error) {
    console.error("Notification error:", error.message);
    return false;
  }
};
