//This contains the schema for our db
const mongoose = require('mongoose');

//project = name, location, releaseDate
const projectSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Project', projectSchema)