const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const courseRoutes = require("./routes/courseRoutes")

require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

app.use(cors())
app.use(express.json())

mongoose.connect(MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Could not Connect to MongoDB: ", err))

app.get("/", (req, res) => {
    res.send("course API is running")
})

app.use("/api/courses", courseRoutes)

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})