import express from "express";
import { query } from "../Utils/ConnectToDB.js";
import { SelectAllAdvice,InsertAdvice} from "../Utils/SqlQuery.js";
import { createError } from "../Utils/error.js";

export async function getAllAdvice(req, res, next) {
    try {
        const result = await query(SelectAllAdvice);
        res.status(200).json({
            success: true,
            data: result.rows
        });
    } catch (error) {
        next(createError(500, "Error fetching advice"));
    }
}
export async function addAdvice(req, res, next) {
    try {
        const { name, title, phone, email, description } = req.body;

        const result = await query(InsertAdvice, [
            name,
            title,
            phone,
            email,
            description
        ]);

        res.status(201).json({
            success: true,
            data: result.rows[0]
        });
    } catch (error) {
        next(createError(500, "Error creating advice"));
    }
}