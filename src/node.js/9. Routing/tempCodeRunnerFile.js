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