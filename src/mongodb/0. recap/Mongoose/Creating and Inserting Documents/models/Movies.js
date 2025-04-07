// Root 👉🏻 "models" Folder 👉🏻 Movies.js


import mongoose from 'mongoose';
import { movie1, movie2, movie3 } from '../db/data.js';


// Define Schema
const movieSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    ratings: { type: Number, required: true, min: 1, max: 5 },
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 10,
    },
    genre: { type: Array },
    isActive: { type: Boolean },
    comments: [ 
        { 
            value: { type: String },
            published: { type: Date, default: Date.now },
        } 
    ],
});


// Create Model for our Schema
const MovieModel = mongoose.model('Movie', movieSchema);


// Insert One new Document
const createDoc = async () => {
    try {
        // Creating a new Document
        const movie = new MovieModel({
            name: 'Spider Man',
            ratings: 4,
            money: 60000,
            genre: ['Action', 'Adventure'],
            isActive: true,
            comments: [
                {
                    value: 'This is a Great Movie',
                    published: Date.now(),
                },
                {
                    value: 'I Love this Movie',
                    published: Date.now(),
                },
            ],
        });

        // Saving the Document to the Database
        const result = await movie.save();

        console.log('Document Saved');

        console.log("---------------- Result ----------------");
        console.log(result);
        console.log("-----------------------------------------");
    } catch (error) {
        console.log(error);
    }
}


// Insert Many new Documents
const createManyDocs = async () => {
    try {
        // Creating new Documents
        const m1 = new MovieModel(movie1);
        const m2 = new MovieModel(movie2);
        const m3 = new MovieModel(movie3);

        // Saving the Document to the Database
        const result = await MovieModel.insertMany([m1, m2, m3]);

        console.log('Documents Saved');

        console.log("---------------- Result ----------------");
        console.log(result);
        console.log("-----------------------------------------");
    } catch (error) {
        console.log(error);
    }
}


// Export "createManyDocs" Function
export { 
    createDoc,
    createManyDocs,
};