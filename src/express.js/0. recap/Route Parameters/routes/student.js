import express from "express";

const router = express.Router();

router.get("/all", (req, res) => res.send("All Students"));

router.post("/add", (req, res) => res.send("Add a New Student"));

router.put("/update", (req, res) => res.send("Update a Student"));

router.delete("/delete", (req, res) => res.send("Delete a Student"));

export default router;