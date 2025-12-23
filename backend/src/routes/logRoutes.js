const express = require("express");
const {
  createLog,
  getLogs,
} = require("../controllers/logController");

const router = express.Router();

router.post("/", createLog); // POST /api/logs
router.get("/", getLogs);    // GET /api/logs

module.exports = router;
