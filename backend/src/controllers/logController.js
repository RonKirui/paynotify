const ApiLog = require("../models/ApiLog");

exports.createLog = async (req, res) => {
  try {
    const log = await ApiLog.create({
      endpoint: req.originalUrl,
      method: req.method,
      data: req.body,
    });

    res.json({
      success: true,
      log,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLogs = async (req, res) => {
  try {
    const logs = await ApiLog.find().sort({ createdAt: -1 });
    res.json({ success: true, data: logs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
