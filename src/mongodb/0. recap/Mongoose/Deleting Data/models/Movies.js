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


// Retrieving Documents from our Database
const getAllDocs = async () => {
    try {
        // 🔸 Find All Documents 🔸
        // const result = await MovieModel.find();
        // console.log('All Documents Retrieved');

        const result = await MovieModel.find();
        
        // 🔸 Find Specific Documents 🔸
        result.forEach((movie) => {
            console.log(`Movie Name: ${movie.name} | Movie Ratings: ${movie.ratings}`);
        });

        // console.log("---------------- Result ----------------");
        // console.log(result);
        // console.log("-----------------------------------------");
    } catch (error) {
        console.log(error);
    }
}


// Retrieving Single Document from our Database
const getSingleDoc = async () => {
    try {
        // 🔸 Find Specific Document's Id 🔸
        // const result = await MovieModel.findById("67b98d9071735f715cb1a1cc");
        // console.log(`Movie Name: ${result.name}`);
        
        // 🔸 Find Specific Document's Id by its Specific Field 🔸
        // const result = await MovieModel.findById(
        //     "67b98d9071735f715cb1a1cc",
        //     "name"
        // );

        // 🔸 Find Specific Document by its Specific Field 🔸
        // const result = await MovieModel.find({
        //     name: "Spider Man",
        //     ratings: 4
        // });

        // 🔸 Find All Documents by Limiting the Number of Documents by 2 🔸
        // const result = await MovieModel.find().limit(2);
        
        // 🔸 Find All Documents by Skipping the First Document 🔸
        // const result = await MovieModel.find().skip(1);
        
        // 🔸 Find Count Number of Document 🔸
        // const result = await MovieModel.find().countDocuments();
        
        // 🔸 Find All Documents by Sorting their "name" property Ascending order 🔸
        // const result = await MovieModel.find().sort({ name: 1 });

        // 🔸 Find All Documents by Sorting their "name" property Decending order 🔸
        // const result = await MovieModel.find().sort({ name: -1 });

        // 🔸 Find All Documents by checking the "money" property is greater than "60000" 🔸
        // const result = await MovieModel.find({ money: { $gt: 60000 } });

        // 🔸 Find All Documents by checking the "money" property is less than "70000" 🔸
        // const result = await MovieModel.find({ money: { $lt: 70000 } });

        // 🔸 Find All Documents by checking the "money" property is NOT included "60000" 🔸
        // const result = await MovieModel.find({ money: { $ne: 60000 } });
        
        // 🔸 Find All Documents by checking the "money" property is "60000" and "ratings" is 4 🔸
        // const result = await MovieModel.find({ $and: [{money: "60000"}, {ratings: 4}] });

        // 🔸 Find All Documents by checking the "money" property is "60000" or "ratings" is 4 🔸
        const result = await MovieModel.find({ $or: [{money: "60000"}, {ratings: 4}] });

        console.log("---------------- Result ----------------");
        console.log(result);
        console.log("-----------------------------------------");
    } catch (error) {
        console.log(error);
    }
}


// Updating Document(s)
const updateDoc = async () => {
    try {
        // 🔸 Update one the by Id 🔸
        // const result = await MovieModel.updateOne(
        //     { _id: "67b9972a75f111ef8748e3d6"}, // Which one we change
        //     { name: "Maze Runner" } // What Property we change, change to what?
        // );
        
        // 🔸 Update Multiple Documents the by the "isActive" property 🔸
        const result = await MovieModel.updateMany(
            { isActive: true }, // Which one we change
            { ratings: 3 } // What Property we change, change to what?
        );
        
        console.log("---------------- Result ----------------");
        console.log(result);
        console.log("-----------------------------------------");
    } catch (error) {
        console.log(error);
    }
}


// Deleting Document(s)
const deleteDoc = async () => {
    try {
        // 🔸 Delete a Document by id 🔸
        // const result = await MovieModel.findByIdAndDelete("67b9972a75f111ef8748e3d9");

        // 🔸 Delete a Document by the "name" Property 🔸
        // const result = await MovieModel.deleteOne({ name: "Movie #3" });

        // 🔸 Delete Multiple Documents by their "isActive" Property 🔸
        const result = await MovieModel.deleteMany({ isActive: true });
        
        console.log("---------------- Result ----------------");
        console.log(result);
        console.log("-----------------------------------------");
    } catch (error) {
        console.log(error);
    }
}


// Export "deleteDoc" Function
export { 
    createDoc,
    createManyDocs,
    getAllDocs,
    getSingleDoc,
    updateDoc,
    deleteDoc
};