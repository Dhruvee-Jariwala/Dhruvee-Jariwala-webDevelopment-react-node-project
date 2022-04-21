//This contains the schema for our db
const mongoose = require('mongoose');

//contact : name, email, phone, msg, date
const contactSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Contact', contactSchema)