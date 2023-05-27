const express = require('express')
const app  = express()
const router = require("./router/taobin.routes")

app.use(router)

app.listen(3031, () =>{
    console.log("start server port 3031")
})