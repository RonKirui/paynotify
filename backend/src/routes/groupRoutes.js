const express = require("express");
const {createGroup} = require("../controllers/group.controler");

const router = express.Router();

router.post("/create", createGroup);

module.exports = router;