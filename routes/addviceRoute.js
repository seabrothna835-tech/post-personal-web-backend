import express from "express";
import {getAllAdvice,addAdvice} from "../Controller/addvice.js";
const router = express.Router();

router.get("/", getAllAdvice);
router.post("/", addAdvice);

export default router;