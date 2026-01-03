import express from "express";
import { c2bCallback } from "./controllers/c2bController.js";

const router = express.Router();

// MPesa C2B callback endpoint
router.post("/callback", c2bCallback);

export default router;
