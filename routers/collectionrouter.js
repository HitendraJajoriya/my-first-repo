const express = require("express");
const router = new express.Router()
const collection = require('../models/collectionSchema')


router.get('/',(req,res) =>{
    res.send('home page')
})

router.post('/collection',async(req,res) => {

    try{
        const user = new collection(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser)
    }catch(err){
        console.log(err)
    }
})

router.get('/collection',async(req,res) =>{
    try{
        const collect = await collection.find()
        res.send(collect)
    }catch(e){
        res.send(e)
    }
})

//update //
router.patch("/collection/:id",async(req,res) => {
    try{
         const _id = req.params.id;
        const update = await collection.findByIdAndUpdate(_id , req.body,{
            new:true
        })
        res.send(update)
    }catch(e){
        res.status(404).send(e)
    }
})

router.delete("/collection/:id",async(req,res) =>{
    try{
        const deletecollection = await collection.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deletecollection)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router