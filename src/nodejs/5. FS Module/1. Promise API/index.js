// Root 👉🏻 5. FS Module 👉🏻 1. Promise API 👉🏻 index.js

/*
    🔥 FS Module 🔥

    🔹 "FS" stands for "File System", It is a built-in module in Node.js 
    It allows you to read and write files 
    You can also use it to create, delete, and rename files 🔹
*/

import * as fs from "fs/promises";

import fs from "fs";

/*
    🔹 You can use the "fs.readFile()" method to read a file 🔹
*/
fs.readFile("c:/Users/Admin/Desktop/nodejs/5. FS Module/index.js", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

/*
    🔹 You can use the "fs.writeFile()" method to write a file 🔹
*/
fs.writeFile("c:/Users/Admin/Desktop/nodejs/5. FS Module/index.js", "Hello World!", (err) => {
    if (err) throw err;
    console.log("File written successfully!");
});

/*
    🔹 You can use the "fs.appendFile()" method to append data to a file 🔹
*/
fs.appendFile("c:/Users/Admin/Desktop/nodejs/5. FS Module/index.js", "Hello World!", (err) => {
    if (err) throw err;
    console.log("File appended successfully!");
});

/*
    🔹 You can use the "fs.exists()" method to check if a file exists 🔹
*/
fs.exists("c:/Users/Admin/Desktop/nodejs/5. FS Module/index.js", (exists) => {
    if (exists) {
        console.log("The file exists!");
    } else {
        console.log("The file does not exist!");
    }
});

/*
    🔹 You can use the "fs.mkdir()" method to create a directory 🔹
*/
fs.mkdir("c:/Users/Admin/Desktop/nodejs/5. FS Module/index.js", (err) => {
    if (err) throw err;
    console.log("Directory created successfully!");
});

/*                               
    🔹 You can use the "fs.rmdir()" method to delete a directory 🔹
*/
fs.rmdir("c:/Users/Admin/Desktop/nodejs/5. FS Module/index.js", (err) => {
    if (err) throw err;
    console.log("Directory deleted successfully!");
});     

/*
    🔹 You can use the "fs.readdir()" method to read the contents of a directory 🔹
*/
fs.readdir("c:/Users/Admin/Desktop/nodejs/5. FS Module", (err, files) => {
    if (err) throw err;
    console.log(files);
});

/*
    🔹 You can use the "fs.rename()" method to rename a file 🔹
*/
fs.rename("c:/Users/Admin/Desktop/nodejs/5. FS Module/index.js", "c:/Users/Admin/Desktop/nodejs/5. FS Module/index.js.bak", (err) => {
    if (err) throw err;
    console.log("File renamed successfully!");
});

/*
    🔹 You can use the "fs.stat()" method to get information about a file 🔹
*/
fs.stat("c:/Users/Admin/Desktop/nodejs/5. FS Module/index.js", (err, stats) => {
    if (err) throw err;
    console.log(stats);
});

/*
    🔹 You can use the "fs.unlink()" method to delete a file 🔹
*/
fs.unlink("c:/Users/Admin/Desktop/nodejs/5. FS Module/index.js", (err) => {
    if (err) throw err;
    console.log("File deleted successfully!");
});

/*
    🔹 You can use the "fs.watch()" method to monitor file changes 🔹   
*/