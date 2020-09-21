const express = require("express")
const app = express()
const mongoose = require("mongoose")
const routes = require("./routes")
const cors = require("cors")

require("dotenv").config()

app.use(cors()) // telling express to use CORS
app.use(express.json()) // server to use json as well
app.use(routes) // server to use the routes in routes.js
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("database connected"))

app.listen(process.env.PORT, () => {
    console.log("Server is running")
})