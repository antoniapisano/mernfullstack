require('dotenv').config()
const express = require('express')
const cors = require('cors')
const testDiaryRoutes = require("./routes/testDiaryRoutes.js")
const userRoutes = require("./routes/userRoutes.js")
const { errorHandler } = require("./middleware/errorMiddleware.js")
const connectDB = require("./config/db.js")
const asyncHandler = require('express-async-handler')

connectDB();
const app = express()

app.use ((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));


app.use("/api/diary",  testDiaryRoutes)
app.use("/api/user", userRoutes)
app.use(errorHandler);


app.get('/', asyncHandler(async (req, res) => {
    res.status(200).json({message: "Welcome to the wine notes app!"})
}))

const port = process.env.PORT || 7500
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})

