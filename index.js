
const express = require('express')
const app = express()
const router = require('./routes')
const mongoose = require('mongoose')

app.use(express.json())// to support JSON-encoded bodies
app.use(express.urlencoded())// to support URL-encoded bodies
// app.use((req,res)=>{
//     res.send("Hello from the express!")
// })
app.use('/', router)
app.use((error, req, res, next) => {
    res.status(error.status || 400).send({
        message: error.message || "An unexpected error occurred",

    })
})

app.listen(5000, async() => {
    console.log("server started at http://localhost:5000")
    console.log("Press CTRL+C to stop...")
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to MongoDB successfully")
}) 
