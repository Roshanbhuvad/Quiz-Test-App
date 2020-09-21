const express = require("express")
const app = express()
const mongoose = require("mongoose")

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