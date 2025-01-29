// Root 👉🏻 10. Serving Pages 👉🏻 index.js

/*
    🔹 so now how can we serve these HTML files 
    into this "index.js" node.js? 🔹
*/

import http from "http";
import fs from "fs";

// Creating the Server
/*
    ❌ This is the WORST Way of doing it! Never do this! ❌
*/

// using "fs" module to read the files 
const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.writeHead(200, "OK", { "Content-Type": "text/html" });

        fs.readFile("./pages/home.html", "utf8", (error, data) => {
            if (error) {
                throw error;
            }
            response.end(data);
        });
    }
    else if (request.url === "/about") {
        response.writeHead(200, "OK", { "Content-Type": "text/html" });

        fs.readFile("./pages/about.html", "utf8", (error, data) => {
            if (error) {
                throw error;
            }
            response.end(data);
        });
    }
    else {
        response.writeHead(404, "BAD", { "Content-Type": "text/html" });
        response.end("<h1>404 Page</h1>");
    }
});


/*
    🔹 and this is how all of our code looks like and I swear to God 
    if you start using "Express.js", you will love "Express.js" 
    because writing all of this score will hurt your finger and we are just talking about two pages 
    like the home page and just above page and we have to do all of this configuration
    so yeah node.js is good but not for this kind of stuff
    so you have to learn about "Express.js" or "Nest.js", if you want to become a Back-End Developer 🔹
*/
server.listen(8000, () => {
    console.log("Server is running on port 8000");
});