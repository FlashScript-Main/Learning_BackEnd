// Root 👉🏻 13. Streams 👉🏻 index.js

/*
    🔹 so in Node.js, "Streams" are a way to handle reading and writing a data 
    they provide a way to work with a large amount of data such as reading of files 
    or writing of files or maybe receiving a large amount of data over a network connection
    without loading the entire data set into a memory 
    and stream can be readable writable or both 
    and can be used with a pipe data between different sources and destinations 🔹
*/

import { createReadStream } from "fs";

const stream = createReadStream(
    "./numbers.txt", 
    // { highWaterMark: 100 }
);

stream.on("data", (data) => {
    console.log(data);
});

// you can see the actual data in the console
const actualStream = createReadStream(
    "./numbers.txt",
    { encoding: "utf8" }
);

actualStream.on("data", (data) => {
    console.log(data);
});