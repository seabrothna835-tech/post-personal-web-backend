import express from "express";
import { query } from "../Utils/ConnectToDB.js";
import { createTableQuery,DeleteEmp,SelectAllEmployeesQuery,SelectEmpById } from "../Utils/SqlQuery.js";
import { createError } from "../Utils/error.js";
export async function getAllEmployees(req, res,next) {
    try{
        const result = await query("SELECT to_regclass('employee_details')");
        console.log(result.rows);
        if (!result.rows[0].to_regclass) {
            await query(createTableQuery);
            console.log("Table 'employee_details' created successfully.");
        } else {
            const { rows: employees } = await query(SelectAllEmployeesQuery);
            res.status(200).json(employees);
            console.log("Employees:", employees);
        }
    } catch (error) {
        next(createError(500, "Error fetching employees"));
    }
}
export async function createEmployee(req, res,next) {
    
}
export async function getEmployeeById(req, res,next) {
    try {
        const employeeId = req.params.id;
        const { rows } = await query(SelectEmpById, [employeeId]);
        if (rows.length === 0) {
            return next(createError(404, "Employee not found"));
        }
        res.status(200).json(rows[0]);
    } catch (error) {
        next(createError(500, "Error fetching employee"));
    }
}
export async function updateEmployee(req, res,next) {
    res.send("Updating employee with ID: " + req.params.id);
}
export async function deleteEmployee(req, res,next) {
    try{
        const empId = req.params.id;
        const {rows} = await query(DeleteEmp,[empId]);
        if(rows.length!=0){
            res.status(200);
            return next("Delete success!!");
        }
    }
    catch{
        next(createError(500,"Error"));
    }
}