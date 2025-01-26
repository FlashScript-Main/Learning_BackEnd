// Root 👉🏻 8. HTTP Module 👉🏻 index.js

/*
    🔹 now let's talk about one of HuXn's favorite module on the entire node.js 
    which is called "HTTP Module" 
    the thing we are currently interested in is something called a "server" 
    like how we are going to be creating our own server
    and all of that kind of stuff
    if you are working with the node.js, so you have to create a server by yourself 
    and I know it sounds horrible like creating a server,
    it's the most easiest thing you can do
    and you do that like for every kind of project 
    so you will get a lot of practice 
    and in real world project you are not going to be creating a server by using node.js 
    but instead you are going to be using some sort of a library or framework 
    like "Express.js" or "Nest.js"
    so later if you decide to learn express.js with me so I'm going to show you 
    what to do and what not to do
    so the code which I'm about to write it does work but I have to say like 
    nowadays nobody write code like this in node.js, they use express.js
    and they create a server in Express.js
    so I'm showing you uh the node version,
    the vanilla version of creating a server 🔹

    🔹 "HTTP Module" stands for "HyperText Transfer Protocol"
    it is a built-in module in Node.js
    it allows you to make HTTP requests 🔹
*/

import http from "http";


// Creating our Server
// Let's also End the Server's Response
const server = http.createServer((request, response) => {
    response.statusCode = 200; // The Status Code
    response.setHeader("Content-Type", "text/html"); // The Content Type to be sent
    response.end("<h1>Hello From Node.js Server</h1>"); // The Body of the Response
});


// Listening to the port 8000
server.listen(8000, () => {
    console.log("Server is running on port 8000");
});


// ShortCut for Creating a Server
const server = http.createServer((req, res) => {
    // Shorthad for Setting the Status Code (code, message, header)
    res.writeHead(
        202, 
        "Good",
        { "Content-Type": "text/html" }
    );
}).listen(8000, () => {
    console.log("Server is running on port 8000");
});