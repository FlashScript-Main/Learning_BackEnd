// Root 👉🏻 index.js

/*
    🔸 Query String 🔸
    🔹 "Query String" is the part of the URL that follows the question mark "?"
    and it is used to pass data from the client to the server 
    so the query string consists of one or more value pairs 
    separate by something called Ampersand "&"
    where each key is separated from its value by equal sign "=" 🔹

    🔻 Examples 🔻
        🔰 /user?name=John 🔰
        🔰 /user?name=John&age=25 🔰
        🔰 /user?name=John&age=25&gender=Male 🔰
*/

import express from "express";


const app = express();


console.clear();


// you can have multiple Query Strings
app.get("/user", (req, res) => {
    console.log(req.query);

    const { name, age, gender } = req.query;

    res.send(`username: ${name}, age: ${age}, gender: ${gender}`);
});


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});