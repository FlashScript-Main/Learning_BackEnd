// Root 👉🏻 5. FS Module 👉🏻 2. Callback API 👉🏻 index.js

/*
    🔹 so that was the first flavor of "FS module" 
    which we call as "Promise API"
    you can do you can still run all of their methods 
    in this "callback API" and in this "Sync API" as well 
    but in this "callback API" you can also pass a callback if you want 🔹
*/


import * as fs from "fs";

/*
// Creating a Directory/Folder using "Callback API"
fs.mkdir(
    "c:/Users/Admin/Desktop/nodejs/5. FS Module/2. Callback API/test",
    (error) => {
        if (error) throw error;
        console.log("Directory/Folder created!");
    }
);
*/


/*
    🔹 so in this case like you can read the file, you can write to a file,
    you can read the content from one file, you can do all of their stuff 
    which I just mentioned inside This "Promise API" 
    but in this case you don't have to "try catch" block 
    and in this case you can specify callback function right here
    you can either provide this function with the name 
    or you can provide a callback function 🔹
*/


// Callback Function
fs.mkdir(
    "c:/Users/Admin/Desktop/nodejs/5. FS Module/2. Callback API/test",
    (error) => {
        if (error) throw error;
        console.log("Directory/Folder created!");
    }
);


// Callback Function with Name
fs.mkdir(
    "c:/Users/Admin/Desktop/nodejs/5. FS Module/2. Callback API/test",
    function (error) {
        if (error) throw error;
        console.log("Directory/Folder created!");
    }
);