// Root 👉🏻 12. Events 👉🏻 index.js

import EventEmitter from "events";

// Creating Instance of EventEmitter
const customEventEmitter = new EventEmitter();


/*
    🔸 Methods of EventEmitter 🔸
    🔹 #1 👉🏻 "on" Method -> Allows us to listen/register for an event infinitely 🔹
    🔹 #2 👉🏻 "once" Method -> Allows us to listen/register for an event only once 🔹
    🔹 #3 👉🏻 "emit" Method -> Allows us to emit/call/trigger an event 🔹
*/


// Registering for an EventEmitter using "on" method
customEventEmitter.on("on-response", (id, name) => {
    console.log(`Hello ${name}, your ID is ${id}`);
});

// Calling the EventEmitter
customEventEmitter.emit("on-response", 1001, "Alex");
customEventEmitter.emit("on-response", 1002, "David");
customEventEmitter.emit("on-response", 1003, "Rose");

// T -> 👇🏻
// Hello Alex, your ID is 1001
// Hello David, your ID is 1002      
// Hello Rose, your ID is 1003  


// Registering for an EventEmitter using "once" method
customEventEmitter.once("once-response", (id, name) => {
    console.log(`Hello ${name}, your ID is ${id}`);
});

// Calling the EventEmitter
customEventEmitter.emit("once-response", 1004, "Mike");
customEventEmitter.emit("once-response", 1005, "John");
customEventEmitter.emit("once-response", 1006, "Kevin");

// T -> 👇🏻
// Hello Mike, your ID is 1004