// Root 👉🏻 index.js


import express from "express";
import student from "./routes/student.js";


const app = express();


// Finally, we can use the router to route the requests to the controllers
app.use("/student", student);


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});