// Root 👉🏻 index.js


import express from "express";
import { products } from "./products.js"; // HuXn: do NOT forget the ".js" Extension


const app = express();


/*
    🔹 now let's talk about how we are going to be sending our data 
    from the Back-End to Front-End using "JSON" 🔹
*/

app.get("/products", (req, res) => {
    res.json(products);
});


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});