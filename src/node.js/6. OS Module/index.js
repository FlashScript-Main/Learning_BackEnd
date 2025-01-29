// Root 👉🏻 6. OS Module 👉🏻 index.js

/*
    🔹 so now let's talk about the "Operating System Module"
    this "OS module" will give you information based on your current operating system
    like the architecture, the CPU and the free memory like home directory, the host name and all of that 🔹
*/

import os from "os";

// Information about the current operating system
console.log(`OS: ${os.type()}`); // T -> OS: Windows_NT

// Information about the current operating system
console.log(`OS Version: ${os.release()}`); // T -> OS Version: 10.0.19045

// Information about the current operating system
console.log(`OS Platform: ${os.platform()}`); // T -> OS Platform: win32

// Information about the architecture
console.log(`Architecture: ${os.arch()}`); // T -> Architecture: x64

// Information about the CPU
console.log(`CPU: ${os.cpus()[0].model}`); // T -> CPU: Intel(R) Core(TM) i5-10400 CPU @ 2.90GHz

// Information about the free memory
console.log(`Free Memory: ${os.freemem()}`); // T -> Free Memory: 9815232512

// Information about the total memory
console.log(`Total Memory: ${os.totalmem()}`); // T -> Total Memory: 17089716224

// Information about the home directory
console.log(`Home Directory: ${os.homedir()}`); // T -> Home Directory: C:\Users\Admin

// Information about the host name
console.log(`Host Name: ${os.hostname()}`); // T -> Host Name: DESKTOP-UHOSTRJ

// Information about the network interfaces
console.log(os.networkInterfaces());