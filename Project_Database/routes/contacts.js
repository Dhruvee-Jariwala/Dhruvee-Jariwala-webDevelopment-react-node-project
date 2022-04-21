const express = require('express');
const router = express.Router();
const Contact = require('../models/contact')

//to get all contacts info
router.get('/', async(req, res) => {
    try{
        const contacts = await Contact.find();
        res.json(contacts);
    }catch(err){
        res.send("Error : "+err)
    }
});

//to get one Contact info
router.get('/:id', async(req, res) => {
    try{
        const contacts = await Contact.findById(req?.params?.id);
        res.json(contacts);
    }catch(err){
        res.send("Error : "+err)
    }
});

//to add data in collection contact
router.post('/', async(req, res) => {
    // res.send("post request");
    // console.log(req.body);
    const contact = new Contact({
        name: req?.body?.name,
        email: req?.body?.email,
        message: req?.body?.message,
    });

    try {
        contact.save().then(c=>{res.json(c)});
        
    } catch (error) {
        res.send("Error : " + error);
    }
});

//to update one document
router.patch('/:id', async(req,res) => {
    try{
        const contact = await Contact.findById(req?.params?.id);
        contact.phone = req?.body?.phone;
        const c = await contact.save();
        res.json(c);
    }catch(err)
    {
        res.send('Error '+err)
    }
})

//delete a contact
router.delete('/:id', async(req,res) => {
    try{
        const contact = await Contact.findById(req?.params?.id);
        contact.id = req?.body?.id;
        const p = await contact.remove();
        res.json(p);
    }catch(err)
    {
        res.send('Error '+err);
    }
})


module.exports = router;