// Root 👉🏻 index.js


/*
    🔸 How to Setup Express Router 🔸

    1️⃣ 👉🏻 Create routes folder and put your routes in a separate file

    2️⃣ 👉🏻 Create an Instance of express.Router()

    3️⃣ 👉🏻 Instead of "app.method()", change that to "router.method()"

    4️⃣ 👉🏻 Export the router

    5️⃣ 👉🏻 Import the router inside the "index.js" file

    6️⃣ 👉🏻 Use the "app.use()" method which is built-in middleware & provides our routes
*/


import express from "express";


// #5 -> Import the router inside the "index.js" file
import student from "./routes/student.js"; // do NOT forget to add ".js" Extension at the end


const app = express();


// #6 -> Use the "app.use()" method which is built-in middleware & provides our routes
app.use("/student", student);


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});