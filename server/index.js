const express=require("express")

//db connect
require("./config/dbtrainning2").connect()

//cors
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())

//routes
const postRoutes = require("./routes/post.routes.js")
app.use(postRoutes);

//run server
app.listen(8080,()=>{console.log("listening to port 8080")})
