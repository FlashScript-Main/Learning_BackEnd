// Root 👉🏻 5. FS Module 👉🏻 1. Promise API 👉🏻 index.js

/*
    🔥 FS Module 🔥

    🔹 "FS" stands for "File System", It is a built-in module in Node.js 
    It allows you to read and write files 
    You can also use it to create, delete, and rename files 🔹
*/


import * as fs from "fs/promises";

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

// Create and Write Files
try {
        // 🔹 Here we are creating the "create_me" Folder 
        // and adding a file as "README.md" inside the Folder 
        // which has the "Hello Node.js" Text within it 🔹

    await fs.mkdir("c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me");

    // writeFile() method is used to create a directory and add files inside them
    await fs.writeFile(
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/README.md",
        "Hello Node.js"
    )

    console.log("'create_me' Folder & 'README.md' File Have Been Created!");
} 
catch (error) {
    console.log(error)
}


// Replace the Text within Created File
try {
        // 🔹 Here we are replacing all of the Text of "README.md" File
        // From "Hello Node.js" to "Hello FlashScript" 🔹

    await fs.writeFile(
        // The "README.md" File already exists 👇🏻
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/README.md",
        "Hello FlashScript"
    )

    console.log("The Text Has Been Changed!");
} 
catch (error) {
    console.log(error)
}


// Reading a File
try {
    const data = await fs.readFile(
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/README.md",
        "utf8"
    );
    
    console.log(`Reading the Data: ${data}`);
} 
catch (error) {
    console.log(error)
}


// Appending the Data to the File (without overwriting it)
try {
    await fs.mkdir("c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me");
    console.log("'create_me' Directory Created");

    await fs.writeFile(
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/README.md",
        "Hello Node.js"
    )
    console.log("'README.md' File Created");

    // appendFile() method is used to append data to a file
    await fs.appendFile(
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/README.md",
        "Hello FlashScript"
    )
    console.log("'README.md' File Appended");

    console.log("---------------------------------------");

    const data = await fs.readFile(
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/README.md",
        "utf8"
    );
    console.log(`Reading the Data: ${data}`);
} 
catch (error) {
    console.log(error)
}


try {
    await fs.appendFile(
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/README.md",
        "Node.js is the BEST!"
    )
    console.log("'README.md' File Appended");

    console.log("---------------------------------------");

    const data = await fs.readFile(
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/README.md",
        "utf8"
    );
    console.log(`Reading the Data: ${data}`);
} 
catch (error) {
    console.log(error)
}


// Copying a File
try {
        // 🔹 Copying all the Contents from "README.md" file to the "info.txt" file
        // the "info.txt" file will be created by "copyFile()" method 🔹

    await fs.copyFile(
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/README.md", // The File
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/info.txt" // The Copy to File
    );
  
    console.log("Copy Has Been Successful!");
} 
catch (error) {
    console.log(error)
}


// Getting the information of a File (Statistics of a File)
try {
    const info = await fs.stat(
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/README.md"
    );

    console.log(`Info: ${info}`);
    console.log(`Is Directory/Folder or File: ${info.isDirectory()}`);
    console.log(`Is Directory/Folder or File: ${info.isFile()}`);
} 
catch (error) {
    console.log(error)
}

// Renaming a File
try {
    // 🔹 Renaming the "README.md" File to "info.txt" 🔹
    await fs.rename(
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/README.md",
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/info.txt"
    );
    console.log("'README.md' File Has Been Renamed to 'info.txt'");
} 
catch (error) {
    console.log(error)
}


// Deleting a File
try {
    // 🔹 Deleting the "info.txt" File 🔹
    await fs.unlink(
        "c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/create_me/info.txt"
    );
    console.log("'info.txt' File Has Been Deleted!");
} 
catch (error) {
    console.log(error)
}

// Advanced FS Imports in Node.js
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