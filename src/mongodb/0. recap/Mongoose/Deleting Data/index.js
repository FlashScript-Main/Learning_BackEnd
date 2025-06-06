// Root 👉🏻 index.js


import express from 'express';
import connectDB from './db/connectDB.js';

// Import "deleteDoc" Function
import { 
    createDoc,
    createManyDocs,
    getAllDocs,
    getSingleDoc,
    updateDoc,
    deleteDoc
} from './models/Movies.js';


const app = express();


const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";


connectDB(`${DATABASE_URL}/movies`);


console.clear(); 


// createDoc();
// createManyDocs();
// getAllDocs();
// getSingleDoc();
// updateDoc();


// Execute the "deleteDoc" Function
deleteDoc();


app.get('/', (req, res) => {
    res.send('Home Page');
});


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});