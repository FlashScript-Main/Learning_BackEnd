// Removing a Directory/Folder
try {
    /*
        🔥 Note 🔥
        🔹 if you want to remove a folder, first of all,
        it should be empty 🔹
    */

    // rmdir() method is used to remove a directory
    await fs.rmdir("c:/Users/Admin/Desktop/nodejs/5. FS Module/1. Promise API/test/remove_me");

    console.log("'remove_me' Folder Has Been Removed!");
} 
catch (error) {
    console.log(error)
}