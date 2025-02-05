// Root 👉🏻 index.js


/*  
    🔸 Route Parameters 🔸

    🔹 so "Route Parameters" are the name URL segments 
    that are used to capture the value specified at their position in the URL 
    so in some situation you want to capture some sort of data from the user 
    like it doesn't matter if the user select, I don't know some sort of products 
    like let's suppose if you are building some sort of an e-commerce application 🔹

    🔻 Examples 🔻
        🔰 e-commerce/products/iphone 🔰
        🔰 e-commerce/products/tablet 🔰
        🔰 e-commerce/products/laptop 🔰
        🔰 e-commerce/products/watch 🔰
        🔰 e-commerce/products/camera 🔰
    
        ⚡ e-commerce/products/:id ⚡
*/

import express from "express";


const app = express();


app.get("/products/:name", (req, res) => {
    // You can also destructure the route parameters
    const { name } = req.params;

    res.send(`Product Name: ${name}`);
});


// You can also provide Multiple Route Parameters
app.get("/products/:category/:id", (req, res) => {
    const { category, id } = req.params;

    res.send(`Product Category: ${category}, Product ID: ${id}`);
});

app.get("/products/order/:day/:month/:year", (req, res) => {
    const { day, month, year } = req.params;

    res.send(`ProductOrder Date: ${day}/${month}/${year}`);
});


/*
    🔹 Now Let's talk about "app.param()" method
    it is used to add the Callback trigger to the raw parameters
    and it is commonly used to check the existence of the data requested 
    related to the same route param 🔹

    ⚡ Basic Format ⚡
    app.param(ParamName, Callback-Function);
*/

app.param("id", (req, res, next, id) => {
    console.log(`id: ${id}`);

    // You can also use the "isNaN()" method to check the existence of the data
    if (isNaN(id)) {
        return res.status(400).send("Invalid ID");
    }

    next();
});

app.get("/products/:id", (req, res) => {
    const { id } = req.params;

    res.send(`Product ID: ${id}`);
});


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});