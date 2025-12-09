const express = require("express")
const { createTrancaction } = require("../controllers/TransactionController")

const router = express.Router()

router.post("transaction", createTrancaction)

module.exports = router;