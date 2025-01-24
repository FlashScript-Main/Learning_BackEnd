// Root 👉🏻 5. FS Module 👉🏻 3. Synchronous API 👉🏻 index.js

/*
    🔹 so that was it about "Promise API" the "Callback API" 
    and this one is for "Synchronous API" 
    which will allows us to write our code synchronously 
    The "Promise API" will allow us to write our code asynchronously 
    the "Synchronous API" one will allow us to run our code synchronously 🔹
*/

import * as fs from "fs";


/*
    🔹 in this case ("Synchronous API"), we can just write our code 
    we don't have to specify the "try catch" block 
    and we also don't have to specify that callback function as well 🔹
*/


// Creating a Directory/Folder
fs.mkdirSync("c:/Users/Admin/Desktop/nodejs/5. FS Module/3. Synchronous API/test");

console.log("'Test' Folder Has Been Created!");


/*
    🔹 in "Synchronous API", you can do all of that stuff like you can read the content,
    you can copy the file, you can append to a file you can remove or delete the directory 
    and all of that kind of stuff but anything you do you have to specify this "sync" 
    at the end right here 🔹
*/
// mkdirSync() method is used to create a directory
// rmdirSync() method is used to remove a directory
// unlinkSync() method is used to delete a file
// renameSync() method is used to rename a file
// writeFileSync() method is used to create a file
// appendFileSync() method is used to append data to a file
// readFileSync() method is used to read the content of a file