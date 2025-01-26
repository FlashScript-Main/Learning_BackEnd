// Root 👉🏻 9. Routing 👉🏻 index.js

/*
    🔹 so now let me just talk to you about routing in HTTP module 
    so how can we specify different routes for our users 
    so once again I'm gonna show you the code but this code is not that much usable 
    I mean like nowadays A lot of people use like "Express.js" or "Nest.js" 
    they don't even use node.js for this kind of stuff but I'm just showing you anyways
    just in case if you go to some sort of interview and they ask you to provide routing 
    by just using vanilla node.js 🔹

    🔹 Routing is a process of deciding which resource to serve to a request
    and it is a very important part of the web development
    so let's talk about it 🔹
*/


/*
    🔻 Different Routes 🔻
    🔹 /        👉🏻 Home Page 🔹 
    🔹 /about   👉🏻 About Page 🔹
    🔹 /contact 👉🏻 Contact Page 🔹
*/


import http from "http";

/*
    🔹 so that we know, we have access to our "url" property,
    now let's just provide our conditional rendering right here 🔹
*/

/*
    🔹 Now let's add some anchor tags to our Pages
    for navigating between pages 🔹

    ❌ This is the WORST Way of doing it! do NOT do this at Home! ❌
*/

// Creating the Server

// Let's Provide some Headers to our Response 👉🏻 🔥 Complete One 🔥
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