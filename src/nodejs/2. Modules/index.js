// Root 👉🏻 2. Modules 👉🏻 index.js

/*
    🔥 Note 🔥
    🔹 NO differences between these two: 🔹
    const greet = require("./greet");
    const greet = require("./greet.js");
*/

// 2️⃣ 👉🏻 Bring the "greet" function
const greet = require("./greet");

// 3️⃣ 👉🏻 Use the "greet" function
greet("FlashScript");

const { person1, person2, person3 } = require("./people");

console.log(`person1: ${person1}`);
console.log(`person2: ${person2}`);
console.log(`person3: ${person3}`);