const mongoose = require('mongoose')
const validator = require('validator')

const collectionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
//create collection 
const collection = new mongoose.model('COLLECTIONS',collectionSchema)

module.exports = collection