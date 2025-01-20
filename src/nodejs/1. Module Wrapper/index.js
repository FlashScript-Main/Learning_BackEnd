// Root 👉🏻 1. Module Wrapper 👉🏻 index.js

/*
    🔹 Under the hood, Node.js does NOT run our code directly, 
    it wraps the entire code inside a function before execution. 
    This function is termed as "Module Wrapper" Function.
    The "Module Wrapper" Function is also called as "IIFE" 
    which stands for "Immediately Invoked Function Expression" 🔹

    🔻 Before a module’s code is executed, 
    NodeJS wraps it with a function wrapper that has the following structure: 🔻
*/
(function (exports, require, module, __filename, __dirname) {
    //module code
});


/*
    🔹 it doesn't matter if you write console.log 
    or Loops or function or anything like that 
    our code will be wrapped with this "Module Wrapper" Function 🔹
*/
// what we see 
console.log("Hello Node.js");

// what node.js does
(function (exports, require, module, __filename, __dirname) {
    console.log("Hello Node.js");
});



/*
    🔥 so you now you might be thinking 
    like what's the point of all of these stuff right here 
    like all of these parameters? 
    anytime we execute our code, our code will be read 
    with this "Module Wrapper" Function
    and it will take these parameters 
    like "exports", "require", "module", "__filename" and "__dirname" 
    beside our code within it 🔥
*/


/*
    🔸 __filename 🔸
    🔹 The "__filename" variable is a string 
    that contains the entire path to the current module file
    with the file name 👉🏻 index.js 🔹
*/
console.log(`__filename: ${__filename}`);


/*
    🔸 __dirname 🔸
    🔹 The "__dirname" variable is a string 
    that contains the absolute path to the current module’s directory
    with-out the file name 👉🏻 ❌ index.js ❌ 🔹
*/
console.log(`__dirname: ${__dirname}`);