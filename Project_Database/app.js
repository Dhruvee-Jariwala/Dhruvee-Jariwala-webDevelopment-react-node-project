const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://Dhruvi:60Epc5pGPCD6OF1Q@cluster0.uon77.mongodb.net/DreamCity'

const app = express()

mongoose.connect(url, {useNewUrlPArser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('DB Connected...')
})

app.use(express.json())
app.use(express.urlencoded());

const blogRouter = require('./routes/blogs')
app.use('/blogs',blogRouter)

const adminRouter = require('./routes/admin')
app.use('/admins',adminRouter)

const inquiryRouter = require('./routes/inquiry')
app.use('/inquiries',inquiryRouter)

const projectRouter = require('./routes/projects');
app.use('/projects', projectRouter);    //use projectRouter for redirecting this request

const contactRouter = require('./routes/contacts');
app.use('/contacts', contactRouter);    //use contactRouter for redirecting this request

const galleryRouter = require('./routes/gallery');
app.use('/gallery', galleryRouter);    //use galleryRouter for redirecting this request

app.listen(8080, function(){
    console.log('Server started..')
})


