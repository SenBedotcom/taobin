const express = require('express')
const router = express.Router()
const path = require('path')

router.get("/prod",(req,res) => { //home page
    res.status(200)
    res.sendFile(path.join(__dirname, "../templates/home.html"))
    res.send(`<a href="/prod/detail">Go to Home</a>`)
})

router.get("/prod/detail", (req, res) => {
    res.status(200)
    res.sendFile(path.join(__dirname, "../templates/prod.html"))
    // const hyperlink = <a href="/">Go to Home</a>
    // res.send(__dirname ,{hyperlink})
})

module.exports = router