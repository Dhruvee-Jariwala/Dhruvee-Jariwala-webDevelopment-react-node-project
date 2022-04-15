const express = require('express')
const res = require('express/lib/response')
const admin = require('../models/admin')
const router = express.Router()
const Admin = require('../models/admin')

router.get('/', async(req,res) => {
    try
    {
        const admins = await Admin.find()
        res.json(admins)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.get('/:id', async(req,res) => {
    try
    {
        const admin = await Admin.findById(req.params.id)
        res.json(admin)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.post('/',async(req,res) => {
    const admin = new Admin({
        aname: req.body.aname,
        apass: req.body.apass,
    })

    try{
        const a1 = await admin.save()
        res.json(a1)
    }catch(err)
    {
        res.send('Error '+err)
    }
            
})

router.patch('/:id', async(req,res) => {
    try{
        const admin = await Admin.findById(req.params.id)
        admin.apass = req.body.apass
        const a1 = await admin.save()
        res.json(a1)
    }catch(err)
    {
        res.send('Error '+err)
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const admin = await Admin.findById(req.params.id)
        admin.id = req.body.id
        const a1 = await admin.remove()
        res.json(a1)
    }catch(err)
    {
        res.send('Error '+err)
    }
})

module.exports = router