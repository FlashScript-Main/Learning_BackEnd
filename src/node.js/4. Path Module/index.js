// Root 👉🏻 4. Path Module 👉🏻 index.js

/*
    🔻 a Path is Looks like this 🔻
    C:\Users\Admin\Desktop\nodejs\4. Path Module\index.js
*/

import path from "path";


// Return the last portion of a path using ".basename()" method
console.log(path.basename("c:/Users/Admin/Desktop/nodejs/4. Path Module/index.js")); // T -> index.js
// last portion of this path is "index.js"


// You can also omit the file extension
console.log(path.basename("c:/something.css", ".css")); // T -> something

console.log(path.dirname("c:/Admin/something.css")); // T -> c:/Admin

console.log(path.extname('c:/Admin/index.html')); // T -> '.html'

console.log(path.extname('c:/Admin/index.coffee.md')); // T -> '.md'

console.log(path.extname('c:/Admin/index.')); // T -> '.'

console.log(path.extname('c:/Admin/index')); // T -> ''

console.log(path.extname('c:/Admin/.index')); // T -> ''

console.log(path.extname('c:/Admin/.index.md')); // T -> '.md' 


// you can also use the "path.join()" method to join paths together
console.log(path.join("c:/Admin", "index.html")); // T -> c:/Admin/index.html

// we can also go up a level of directory
console.log(path.join("c:/Admin", "..")); // T -> c:/
console.log(path.join("c:/Admin/index.html", "..")); // T -> c:\Admin

// we can also go up two levels of directory
console.log(path.join("c:/Admin/index.html", "..", "..")); // T -> c:\


/*
    🔹 so in some situation you would get like a very ugly in the path 
    you can use ".normalize()" method to make it Normal! 🔹
*/
console.log(path.normalize("c://///something/////else/////index.js")); // T -> c:\something\else\index.js


// if you want to get the path as an object with more details, use ".parse()" method
console.log(path.parse("c:/Admin/index.html"));
// T -> 👇🏻
// {
//     root: 'c:/',
//     dir: 'c:/Admin',
//     base: 'index.html',
//     ext: '.html',
//     name: 'index'
// }

// you can destructure the object to get the different parts of the path
const parsedPath = path.parse("c:/Admin/index.html");
const { root, dir, base, ext, name } = parsedPath;
console.log(root); // T -> c:/
console.log(dir); // T -> c:/Admin
console.log(base); // T -> index.html
console.log(ext); // T -> .html
console.log(name); // T -> index