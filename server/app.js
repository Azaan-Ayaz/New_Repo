const express = require("express")
const app = express()
const dataBase = require("./Database/dataBase")
const cors = require("cors")
const morgan = require("morgan")
const router = require("./Routes/contactRoute")

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

/* Route */
app.use("/",router)

dataBase()

module.exports = app