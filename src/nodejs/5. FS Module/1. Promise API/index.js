// Root 👉🏻 5. FS Module 👉🏻 1. Promise API 👉🏻 index.js

/*
    🔥 FS Module 🔥

    🔹 "FS" stands for "File System", It is a built-in module in Node.js 
    It allows you to read and write files 
    You can also use it to create, delete, and rename files 🔹
*/


import * as fs from "fs/promises";

/*
// Creating a Directory/Folder
try {
    // mkdir() method is used to create a directory
    await fs.mkdir("c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test");
    console.log("'Test' Folder Has Been Created!");
} 
catch (error) {
    console.log(error)
}


// Let's See how the Error would look like
try {
    await fs.mkdir("c:/something");
} 
catch (error) {
    console.log(error);
}

// If you want to create multiple folder you can use the "recursive" option
try {
    await fs.mkdir(
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/one/two/three", 
        { recursive: true }
    );
    console.log("'one' & 'two' & 'three' Folders Has Been Created!");
} 
catch (error) {
    console.log(error)
}

// Reading the Content of a Directory/Folder
try {
    // readdir() method is used to read the content of a directory
    const files = await fs.readdir("c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test");

    // Next we need to loop through the files and print them out
    for (const file of files) {
        console.log(file);
    }
} 
catch (error) {
    console.log(error)
}


// Removing a Directory/Folder
try {
    // 🔥 Note 🔥
    // 🔹 if you want to remove a folder, first of all,
    // it should be empty 🔹
    
    // rmdir() method is used to remove a directory
    await fs.rmdir("c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/remove_me");

    console.log("'remove_me' Folder Has Been Removed!");
} 
catch (error) {
    console.log(error)
}
*/

// Creating a Directory/Folder
try {
    // mkdir() method is used to create a directory
    await fs.mkdir("c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test");
    console.log("'Test' Folder Has Been Created!");
} 
catch (error) {
    console.log(error)
}