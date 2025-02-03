import express from "express";
import { allStudents, createStudent, updateStudent, deleteStudent } from "../controllers/student.js";

const router = express.Router();

router.get("/all", allStudents);

router.post("/add", createStudent);

router.put("/update", updateStudent);

router.delete("/delete", deleteStudent);

export default router;