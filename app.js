const express = require('express')
const app = express()
const router = require('./routers/collectionrouter')
require('./db/conn')
const collection = require("./models/collectionSchema")
const PORT = process.env.port || 3000
app.use(express.json())
app.use(router)

app.listen(PORT,() =>{
    console.log(`running server port number 3000`)
})