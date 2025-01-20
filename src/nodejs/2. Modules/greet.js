// Root 👉🏻 2. Modules 👉🏻 greet.js

/*
    🔸 Modules 🔸
    🔹 A module is a file that exports a JavaScript object 
    that can be imported and used by other modules 🔹
    🔹 modules are a way to pass over code from one file into another file
    so it will allows us to reuse our code
    that we don't have to write our code again and again in different kind of files 🔹
*/


/*
    🔹 so I have this function right here 
    but if I want to use this same function inside the "index.js" file
    so we need to use "Modules" 🔹
*/
function greet(username) {
    console.log(`Hello ${username}`);
}


// 1️⃣ 👉🏻 Tell other Files you can use this same function
module.exports = greet;