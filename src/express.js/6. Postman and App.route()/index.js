// Root 👉🏻 index.js


import express from "express";


const app = express();


/*
    🔹 Now let's learn all of the HTTP methods,
    including "GET", "POST", "PUT", "DELETE", and "PATCH" 🔹

    🔹 HuXn added Ugly Code for now just to test HTTP methods 🔹
*/

// Ugly Code 👉🏻 This will be refactored
// 🔻 Before 🔻
// app.get("/get-students", (req, res) => {
//     res.send("All Students");
// });

// app.post("/post-student", (req, res) => {
//     res.send("Add New Student");
// });

// app.put("/put-student", (req, res) => {
//     res.send("Update Student");
// });

// app.delete("/delete-student", (req, res) => {
//     res.send("Delete Student");
// });


/*
    🔹 Let's Let's Now Refactor our Code 🔹

    🔸 app.route() 🔸
    🔹 "app.route()" is a method that allows us to define routes for our application
    it returns an instance of single route which you can then use to handle HTTP requests
    with optional middleware, something which you are going to be learning later in this course 
    so by HTTP requests, we mean GET, POST, PUT, DELETE, and PATCH
    basically we use this "app.route()" to avoid duplicate codes 🔹
*/

// Refactored Code
// 🔻 After 🔻
app.route("/student")
        .get((req, res) => res.send("All Students"))
        .post((req, res) => res.send("Add New Student"))
        .put((req, res) => res.send("Update Student"))
        .delete((req, res) => res.send("Delete Student"));


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});