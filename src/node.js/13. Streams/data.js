// Root 👉🏻 13. Streams 👉🏻 data.js

// Next we need to generate alot of data using "fs" module

import fs from "fs";

for (let i = 0; i < 100; i++) {
    fs.writeFileSync(
        `../13. Streams/numbers.txt`, 
        `${i}\n`,
        { flag: "a" }
    );
}