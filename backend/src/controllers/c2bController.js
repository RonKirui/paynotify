import C2BTransaction from "../models/C2BTransaction.js";

/**
 * MPesa C2B Callback Controller
 * This endpoint receives payment notifications from Safaricom
 */
export const c2bCallback = async (req, res) => {
  try {
    console.log("C2B CALLBACK RECEIVED:");
    console.log(JSON.stringify(req.body, null, 2));

    const {
      TransactionType,
      TransID,
      TransTime,
      TransAmount,
      BusinessShortCode,
      BillRefNumber,
      InvoiceNumber,
      OrgAccountBalance,
      ThirdPartyTransID,
      MSISDN,
      FirstName,
      MiddleName,
      LastName
    } = req.body;

    // Prevent duplicate transactions
    const existingTx = await C2BTransaction.findOne({ transID: TransID });
    if (existingTx) {
      console.log("Duplicate transaction ignored:", TransID);
      return res.status(200).json({
        ResultCode: 0,
        ResultDesc: "Duplicate transaction"
      });
    }

    // Save transaction
    await C2BTransaction.create({
      transactionType: TransactionType,
      transID: TransID,
      transTime: TransTime,
      amount: Number(TransAmount),
      shortCode: BusinessShortCode,
      billRefNumber: BillRefNumber,
      invoiceNumber: InvoiceNumber,
      accountBalance: OrgAccountBalance,
      thirdPartyTransID: ThirdPartyTransID,
      phoneNumber: MSISDN,
      firstName: FirstName,
      middleName: MiddleName,
      lastName: LastName,
      rawPayload: req.body
    });

    console.log("Transaction saved successfully");

    // REQUIRED response to Safaricom
    return res.status(200).json({
      ResultCode: 0,
      ResultDesc: "Accepted"
    });

  } catch (error) {
    console.error("C2B CALLBACK ERROR:", error.message);

    return res.status(500).json({
      ResultCode: 1,
      ResultDesc: "Internal Server Error"
    });
  }
};
