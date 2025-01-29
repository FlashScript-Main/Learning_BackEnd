// Root 👉🏻 3. ES6 Modules 👉🏻 index.js

/*
    🔥 Huge Note 🔥

    🔹 Back-End way: 🔹
    const greet = require("./greet");

    🔹 Front-End way: 🔹
    import greet from "./greet.js";

    🔰 do NOT forget to specifiy the ".js" extension in Front-End 🔰
*/

// 2️⃣ 👉🏻 Bring the "greet" function
import greet from "./greet.js";

// 3️⃣ 👉🏻 Use the "greet" function
greet("FlashScript");


/*
    🔥 Note 🔥

    🔹 In the "Front-End" way of doing this, 
    you do NOT have access to the "__filename" & "__dirname" no more! 🔹
*/

console.log(__filename);

console.log(__dirname);