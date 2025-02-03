import express from "express";

const app = express();

// app.get();
// app.post();
// app.put();
// app.delete();

app.get("/single-callback", (req, res) => {
    res.send("Single Callback Function");
});

app.get("/double-callback", 
    (req, res, next) => {
        console.log("First Callback Function");
        next();
    },
    (req, res) => {
        res.send("Second Callback Function");
    }
);

app.get("/products/:name", (req, res) => {
    const { name } = req.params;
    res.send(`This is the product with name of ${name}`);
});

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