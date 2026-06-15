import express from "express";
import { Router } from "express";
const router = Router();

import { createEmployee, deleteEmployee, getEmployee, getEmployeeById, updateEmployee } from "../controller/EmployeeController.js";

router.post("/", createEmployee);
router.get("/", getEmployee);
router.get("/:id", getEmployeeById);
router.get("/delete", deleteEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;