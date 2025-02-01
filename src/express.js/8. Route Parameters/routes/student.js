// Root 👉🏻 "routes" folder 👉🏻 student.js


import express from "express";


// #2 -> Create an Instance of express.Router()
const router = express.Router();


// #3 -> Instead of "app.method()", change that to "router.method()"
router.get("/all", (req, res) => res.send("All Students"));

router.post("/add", (req, res) => res.send("Add New Student"));

router.put("/update", (req, res) => res.send("Update Student"));

router.delete("/delete", (req, res) => res.send("Delete Student"));


// #4 -> Export the router 
export default router;