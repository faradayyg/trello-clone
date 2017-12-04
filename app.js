const express = require("express")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")


const config = require("./config/config")

//TODO: create mongoose Promises using es6 Promise library
//mongoose.Promise = global.Promise
//mongoose.connect(config.database.url)


const app = express()

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get("/", (req, res) => {
  res.send({
    status: "Hello World"
  })
})

app.listen(config.database.port)
