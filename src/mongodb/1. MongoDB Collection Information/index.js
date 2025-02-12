// Root 👉🏻 index.js


import express from "express";
import path from "path";

// Atlast, import the routes
import route from "./routes/route.js";


const app = express();


app.set("view engine", "ejs");


app.use("/", route);


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});