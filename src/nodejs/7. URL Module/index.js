// Root 👉🏻 7. URL Module 👉🏻 index.js

/*
    🔹 "URL Module" stands for "Uniform Resource Locator"
    it is a built-in module in Node.js
    it allows you to parse URLs and make HTTP requests 🔹
*/

import { URL } from "url";

const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

// URL 👉🏻 https://www.example.com:8080/p/a/t/h?query=string#hash
// Link 👉🏻 https://www.example.com
// Port-Name 👉🏻 8080
// Path 👉🏻 /p/a/t/h
// Query 👉🏻 ?query=string
// Fragment/Hash 👉🏻 #hash


// Let's get information about the URL
console.log(myURL);
// T -> 👇🏻
// URL {
//     href: 'https://www.example.com:8080/p/a/t/h?query=string#hash',
//     origin: 'https://www.example.com:8080',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'www.example.com:8080',
//     hostname: 'www.example.com',
//     port: '8080',
//     pathname: '/p/a/t/h',
//     search: '?query=string',
//     searchParams: URLSearchParams { 'query' => 'string' },      
//     hash: '#hash'
// }


console.log(myURL.href); // T -> https://www.example.com:8080/p/a/t/h?query=string#hash
// HTML <a> tag href 👉🏻 https://www.example.com:8080/p/a/t/h?query=string#hash


console.log(myURL.protocol);  // T -> https:
console.log(myURL.hostname);  // T -> www.example.com
console.log(myURL.port);      // T -> 8080
console.log(myURL.pathname);  // T -> /p/a/t/h
console.log(myURL.search);    // T -> ?query=string
console.log(myURL.hash);      // T -> #hash

console.log(myURL.searchParams); // T -> URLSearchParams { 'query' => 'string' }
console.log(myURL.searchParams.get("query")); // T -> string


// Both Works the Same
console.log(myURL.toString()); // T -> https://www.example.com:8080/p/a/t/h?query=string#hash
console.log(myURL.toJSON()); // T -> https://www.example.com:8080/p/a/t/h?query=string#hash
