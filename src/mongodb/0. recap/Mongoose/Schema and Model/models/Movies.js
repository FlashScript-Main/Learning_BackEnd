// Root 👉🏻 "models" Folder 👉🏻 Movies.js


import mongoose from 'mongoose';


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
const movieModel = mongoose.model('Movie', movieSchema);


// Export Model
export default movieModel;