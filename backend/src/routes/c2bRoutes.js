const express = require("express");
const { c2bCallback } = require("../controllers/c2bController");

const router = express.Router();

router.post("/callback", c2bCallback); // POST /api/c2b/callback

module.exports = router;
