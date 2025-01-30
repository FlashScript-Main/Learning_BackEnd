// Root 👉🏻 index.js

/*
    ⚡ HTTP methods in Express.js ⚡
    🔹 "GET" Method     👉🏻 ".get()" in Express.js       👉🏻 Retrive/Get Data from Database 🔹
    🔹 "POST" Method    👉🏻 ".post()" in Express.js      👉🏻 Create/Insert Data to Database 🔹
    🔹 "PUT" Method     👉🏻 ".put()" in Express.js       👉🏻 Completely Update Data to Database 🔹
    🔹 "DELETE" Method  👉🏻 ".delete()" in Express.js    👉🏻 Delete Data to Database 🔹
    🔹 "PATCH" Method   👉🏻 ".patch()" in Express.js     👉🏻 Partially(تا حدی) Update Data to Database 🔹
    🔹 "ALL" Method     👉🏻 ".all()" in Express.js       👉🏻 It will work for any HTTP Request Method (Not Recommended) 🔹
*/

/*
    🔹 so we will not use these "POST", "PUT", "DELETE", "PATCH" for now
    but we will use it later once we are learning about how we can test our API 
    by using either our thunderclined or maybe a postman 
    so HuXn going to talk about all of that later 
    for now we are going to be just using this get method to learn express.js 
    and later we are going to be using all of these HTTP methods 🔹
*/

import express from "express";


const app = express();


// Advance Routing (String Pattern Path) 👉🏻 NOT useful
app.get("/ab?cd", (req, res) => {
    res.send("If the user hit (acd) or (abcd) then this will run");
});

// Regex Pattern Path 👉🏻 NOT useful
app.get(/x/, (req, res) => {
    res.send("If the path includes the letter (x), it will work");
});

// Advanced Regex Pattern Path 👉🏻 NOT useful
app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
    res.send("this path will only work if the request matches to the users and for slash or four digit numbers");
});
// examples 👇🏻 
// users/1234 👉🏻 ✅
// users/12345 👉🏻 ❌
// huxn/1234 👉🏻 ❌
// users/1234/profile 👉🏻 ❌
// users/0000 👉🏻 ✅


// Nested Routes 👉🏻 🔥 useful 🔥
app.get("/products/:id", (req, res) => {
    res.send(`This is the product with id of ${req.params.id}`);
});


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});