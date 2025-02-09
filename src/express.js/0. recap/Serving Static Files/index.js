// Root 👉🏻 index.js

import express from "express";
import { userCredentials } from "./middlewares/auth";

const app = express();

// app.use("/", userCredentials);
app.use(userCredentials);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});