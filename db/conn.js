const mongoose = require('mongoose')

mongoose.connect("mongodb://0.0.0.0:27017/database").then(()=> {
    console.log("connect")
}).catch((err) => {
    console.log(err)
})