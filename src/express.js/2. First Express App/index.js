// Root 👉🏻 index.js

/*
    🔹 first of all, we are going to be writing our first Express app 
    so the first thing that you have to do is that
    we have to import "express" from express.js on top 🔹
*/

import express from "express";

// Next, we need to create an instance of express
const app = express();

/*
    🔹 so now we are creating an instance of this express.js 
    and we are storing it inside this "app" variable right here 
    this line of code will allows us to create a server 
    and it will do all of that heavy lifting which you don't have to do anymore 🔹
*/

// HuXn: You don't have to worry about this code! 👇🏻
app.get("/", (req, res) => {
    res.send("Welcome to Express.js");
});

// Finally, we are going to be listening to port 8000 
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

/*
    ⚡ Basic Format ⚡

    1️⃣ 👉🏻 import Express
    import express from "express";

    2️⃣ 👉🏻 create an instance of Express
    const app = express();

    3️⃣ 👉🏻 listen to port 8000
    app.listen(PORT, optional-callback-function);
*/