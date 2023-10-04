require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get("/",(req,res)=>{
    console.log("route access");
    res.send("this is home page")
})

app.listen(port,()=>{
    console.log(`the server is started ${port}`);
})
