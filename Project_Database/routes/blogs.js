const express = require('express')
const res = require('express/lib/response')
const blog = require('../models/blog')
const router = express.Router()
const Blog = require('../models/blog')

router.get('/', async(req,res) => {
    try
    {
        const blogs = await Blog.find()
        res.json(blogs)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.get('/:id', async(req,res) => {
    try
    {
        const blog = await Blog.findById(req.params.id)
        res.json(blog)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.post('/',async(req,res) => {
    const blog = new Blog({
        title: req.body.title,
        excerpt: req.body.excerpt,
        content: req.body.content,
        author: req.body.author,
        date: req.body.date,
        image: req.body.image
    })

    try{
        const b1 = await blog.save()
        res.json(b1)
    }catch(err)
    {
        res.send('Error '+err)
    }
            
})

router.patch('/:id', async(req,res) => {
    try{
        const blog = await Blog.findById(req.params.id)
        blog.id = req.body.id
        const b1 = await blog.save()
        res.json(b1)
    }catch(err)
    {
        res.send('Error '+err)
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const blog = await Blog.findById(req.params.id)
        blog.id = req.body.id
        const b1 = await blog.remove()
        res.json(b1)
    }catch(err)
    {
        res.send('Error '+err)
    }
})

module.exports = router