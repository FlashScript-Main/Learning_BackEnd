const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    username : String,
    email : String,
    phone : Number,
    deleted : Boolean
})

module.exports = mongoose.model('User',userSchema);