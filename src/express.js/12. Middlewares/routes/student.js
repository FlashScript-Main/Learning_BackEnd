// Root 👉🏻 "routes" folder 👉🏻 student.js


import express from "express";


// First, import all the functions that are used in the controller file
import {
    allStudents,
    createStudent,
    updateStudent,
    deleteStudent
} from "../controllers/student.js"; // HuXn: do NOT forget to add the ".js" Extension at the end of the file name


const router = express.Router();


// 🔻 After 🔻
router.get("/all", allStudents);

router.post("/create", createStudent);

router.put("/update", updateStudent);

router.delete("/delete", deleteStudent);


export default router;