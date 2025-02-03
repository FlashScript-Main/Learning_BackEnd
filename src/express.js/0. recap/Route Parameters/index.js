import express from "express";

import student from "./routes/student.js";

const app = express();

app.param("id", (req, res, next, id) => {
    console.log(`id: ${id}`);

    if (isNaN(id)) {
        return res.status(400).send("Invalid id");
    }
    
    next();
});

app.get("/products/:id", (req, res) => {
    const { id } = req.params;

    res.send(`Product id: ${id}`);
});

app.get("/products/:name/:id", (req, res) => {
    const { id, name } = req.params;
    res.send(`Product: ${name}, id: #${id}`);
});

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