import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1>");
});

app.get("*", (req, res) => {
    res.send("404 Page");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});