const express = require('express');
const router = express.Router();
const Project = require('../models/project')

//to get all projects info
router.get('/', async(req, res) => {
    try{
        const projects = await Project.find();
        res.json(projects);
    }catch(err){
        res.send("Error : "+err)
    }
});

//to get one project info
router.get('/:id', async(req, res) => {
    try{
        const projects = await Project.findById(req?.params?.id);
        res.json(projects);
    }catch(err){
        res.send("Error : "+err)
    }
});

//to add data in collection project
router.post('/', async(req, res) => {
    // res.send("post request");
    const project = new Project({
        name: req?.body?.name,
        location: req?.body?.location,
        releaseDate: req?.body?.releaseDate
    });

    try {
        const p = await project.save();
        res.json(p);
        // console.log(req.body)
    } catch (error) {
        res.send("Error : " + error);
    }
});

//to update one document
router.patch('/:id', async(req,res) => {
    try{
        const project = await Project.findById(req.params.id);
        project.location = req?.body?.location;
        const p = await project.save();
        res.json(p);
    }catch(err)
    {
        res.send('Error '+err)
    }
})

//delete a project
router.delete('/:id', async(req,res) => {
    try{
        const project = await Project.findById(req.params.id);
        project.id = req?.body?.id;
        const p = await project.remove();
        res.json(p);
    }catch(err)
    {
        res.send('Error '+err);
    }
})


module.exports = router;