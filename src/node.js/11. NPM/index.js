// Root 👉🏻 11. NPM 👉🏻 index.js

import http from "http";

// Let's change the "h1" text and save it to see the changes instantly
const server = http.createServer((request, response) => {
    response.writeHead(200, "OK", { "Content-Type": "text/html" });
    response.end("<h1>Hello FlashScript</h1>"); // 👈🏻 change this text
});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});