// Root 👉🏻 index.js


import express from "express";


const app = express();


/*
    🔹 so now let's talk about the Callback function 
    which you are going to be providing right in here 
    so you can either provide a single callback function, 
    you can provide more than one callback function,
    you can provide arrays of callback function 
    or you can combine all of them at once 
    so something I call craziness 🔹
*/

// Single Callback Function
app.get("/single-callback", (req, res) => {
    res.send("Single Callback Function");
});


/*
    🔹 The "next()" function is a function 
    that is used to pass control to the next callback function in the chain, 
    so if you want to pass control to the next callback function, 
    you can use the "next()" function.
    The Most useful case of the "next()" function is in middleware.
    if we didn't provide this next method right here 
    so we would NOT be able to jump from this callback function to next one.
*/

// Double Callback Function
app.get("/double-callback", 
    (req, res, next) => { 
        console.log("First Callback Function");
        next();
    },
    (req, res) => { 
        res.send("Second Callback Function"); 
    }
);


/*  
    🔹 now let's talk about arrays of callback functions 
    so we need to add the "next()" method to all of the callback functions
    except the last one 🔹

    ❌ this is NOT a suitable way of using Express.js, do NOT do this! ❌
*/

const callbackFunction1 = (req, res, next) => { 
    console.log("First Callback Function");
    next();
};

const callbackFunction2 = (req, res, next) => { 
    console.log("Second Callback Function"); 
    next();
};

const callbackFunction3 = (req, res) => { 
    console.log("Third Callback Function"); 
    res.send("Array of Callback Functions");
};

// Array of Callback Functions
app.get(
    "/array-of-callbacks", 
    [callbackFunction1, callbackFunction2, callbackFunction3], 
);


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});