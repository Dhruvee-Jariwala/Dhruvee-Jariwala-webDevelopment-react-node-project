//This contains the schema for our db
const mongoose = require('mongoose');

//contact : name, email, phone, msg, date
const gallerySchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Gallery', gallerySchema)