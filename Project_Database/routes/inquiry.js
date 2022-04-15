const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const Inquiry = require('../models/Inquiry')

router.get('/', async(req,res) => {
    try
    {
        const inquirys = await Inquiry.find()
        res.json(inquirys)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.get('/:id', async(req,res) => {
    try
    {
        const inquiry = await Inquiry.findById(req.params.id)
        res.json(inquiry)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.post('/',async(req,res) => {
    const inquiry = new Inquiry({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        msg: req.body.msg,
        projecttype: req.body.projecttype,
        idate: req.body.idate
    })

    try{
        const i1 = await inquiry.save()
        res.json(i1)
    }catch(err)
    {
        res.send('Error '+err)
    }
            
})

router.patch('/:id', async(req,res) => {
    try{
        const inquiry = await Inquiry.findById(req.params.id)
        inquiry.msg = req.body.msg
        const i1 = await inquiry.save()
        res.json(i1)
    }catch(err)
    {
        res.send('Error '+err)
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const inquiry = await Inquiry.findById(req.params.id)
        inquiry.id = req.body.id
        const i1 = await inquiry.remove()
        res.json(i1)
    }catch(err)
    {
        res.send('Error '+err)
    }
})

module.exports = router