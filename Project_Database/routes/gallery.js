const express = require('express');
const router = express.Router();
const Gallery = require('../models/gallery')

//to get all gallerys info
router.get('/', async(req, res) => {
    try{
        const gallery = await Gallery.find();
        res.json(gallery);
    }catch(err){
        res.send("Error : "+err)
    }
});

//to get one gallery info
router.get('/:id', async(req, res) => {
    try{
        const gallery = await Gallery.findById(req?.params?.id);
        res.json(gallery);
    }catch(err){
        res.send("Error : "+err)
    }
});

//to add data in collection gallery
router.post('/', async(req, res) => {
    // res.send("post request");
    const gallery = new Gallery({
        name: req?.body?.name,
        url: req?.body?.url,
        date: req?.body?.date,
    });

    try {
        const g = await gallery.save();
        res.json(g);
        // console.log(req.body)
    } catch (error) {
        res.send("Error : " + error);
    }
});

//to update one document
router.patch('/:id', async(req,res) => {
    try{
        const gallery = await Gallery.findById(req?.params?.id);
        gallery.url = req?.body?.url;
        const g = await gallery.save();
        res.json(g);
    }catch(err)
    {
        res.send('Error '+err)
    }
})

//delete a gallery
router.delete('/:id', async(req,res) => {
    try{
        const gallery = await Gallery.findById(req?.params?.id);
        gallery.id = req?.body?.id;
        const g = await gallery.remove();
        res.json(g);
    }catch(err)
    {
        res.send('Error '+err);
    }
})


module.exports = router;