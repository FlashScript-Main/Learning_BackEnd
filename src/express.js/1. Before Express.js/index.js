// Root 👉🏻 1. Before Express.js 👉🏻 index.js

/*
    🔹 This is the way of handling Routes in Node.js
    it is the worst way of doing Routes nowadays 
    and you can use Express.js for handling Routes much better and easier 🔹
*/

import http from "http";

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.writeHead(200, "OK", { "Content-Type": "text/html" });
        response.end("<h1>Home Page</h1>");
    }
    else if (request.url === "/about") {
        response.writeHead(200, "OK", { "Content-Type": "text/html" });
        response.end("<h1>About Page</h1>");
    }
    else if (request.url === "/contact") {
        response.writeHead(200, "OK", { "Content-Type": "text/html" });
        response.end("<h1>Contact Page</h1>");
    }
    else {
        response.writeHead(404, "BAD", { "Content-Type": "text/html" });
        response.end("<h1>404 Page</h1>");
    }
});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});