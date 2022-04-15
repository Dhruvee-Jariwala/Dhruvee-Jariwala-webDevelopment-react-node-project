const mongoose= require('mongoose')

const inquirySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,
    },
    msg:{
        type: String,
        required: true,
    },
    projecttype:{
        type: String,
        required: true,
    },
    idate:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Inquiry',inquirySchema)