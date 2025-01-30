// Root 👉🏻 index.js

/*
    ⚡ Basic Format of Express.js ⚡

    1️⃣ 👉🏻 Create a Folder

    2️⃣ 👉🏻 Create the "index.js" file within that folder

    3️⃣ 👉🏻 Create the "package.json" file within that folder using "npm init -y"

    4️⃣ 👉🏻 add '"type": "module"' in the "package.json" file

    5️⃣ 👉🏻 Install Express.js using "npm install express"

    6️⃣ 👉🏻 import Express
    import express from "express";

    7️⃣ 👉🏻 create an instance of Express
    const app = express();

    8️⃣ 👉🏻 listen to port 8000
    app.listen(PORT, optional-callback-function);
*/


import express from "express";


const app = express();


/*
    ⚡ Basic Routing in Express.js ⚡

    🔸 "get" method 🔸
    🔹 The "get" method is used to handle GET requests 🔹
    🔰 app.get(path, callback); 🔰

    🔸 "post" method 🔸
    🔹 The "post" method is used to handle POST requests 🔹
    🔰 app.post(path, callback); 🔰

    🔸 "put" method 🔸
    🔹 The "put" method is used to handle PUT requests 🔹
    🔰 app.put(path, callback); 🔰

    🔸 "delete" method 🔸
    🔹 The "delete" method is used to handle DELETE requests 🔹
    🔰 app.delete(path, callback); 🔰
    
    🔸 "all" method 🔸
    🔹 The "all" method is used to handle all HTTP methods 🔹
    🔰 app.all(path, callback); 🔰

    🔸 "use" method 🔸
    🔹 The "use" method is used to handle all HTTP methods 🔹
    🔰 app.use(path, callback); 🔰
*/


/*  
    🔸 res.send() 🔸
    🔹 The "res.send()" method is used to send a response to the client 🔹
*/

// Let's Provide send() method with a HTML tag
app.get("/", (req, res) => {
    res.send("<h1>Welcom to Home</h1>");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.get("*", (req, res) => {
    res.send("404 Page");
});


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});