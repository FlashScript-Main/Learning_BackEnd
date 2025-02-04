// Root 👉🏻 index.js


import express from "express";


const app = express();


const userCredentials = (req, res, next) => {
    console.log("username: HuXn");
    console.log("email: huxn@gmail.com");
    console.log("password: 12345678");

    next();
}


app.use(userCredentials);


app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1>");
});

app.get("*", (req, res) => {
    res.send("<h1>404 Page</h1>");
});


console.clear();


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

// Middleware for only one Route
app.get("/", userCredentials, (req, res) => {
    res.send("<h1>Home Page</h1>");
});


// 👆🏻 ❗ OR ❗ 👇🏻


app.use("/", userCredentials);


/* ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖ */


// Middleware for all Routes
app.use(userCredentials);

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});