import express from "express";
import { getAllEmployees, createEmployee, getEmployeeById, updateEmployee, deleteEmployee } from "../Controller/employeeController.js";
const router = express.Router();

router.get("/", getAllEmployees);
router.post("/", createEmployee);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;