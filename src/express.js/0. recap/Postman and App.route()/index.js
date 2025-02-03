import express from "express";

import student from "./routes/student.js";

const app = express();

app.use("/student", student);

app.get("/get-students", (req, res) => {
    res.send("All Students");
});

app.post("/post-student", (req, res) => {
    res.send("Add a New Student");
});

app.put("/put-student", (req, res) => {
    res.send("Update a Student");
});

app.delete("/delete-student", (req, res) => {
    res.send("Delete a Student");
});


app.route("/student")
    .get((req, res) => res.send("All Students"))
    .post((req, res) => res.send("Add a New Student"))
    .put((req, res) => res.send("Update a Student"))
    .delete((req, res) => res.send("Delete a Student"));


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});