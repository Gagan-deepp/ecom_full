const express = require('express')
const dotenv = require('dotenv')
const { connectDB } = require('./Connection/Connection')
const { router } = require('./routes/routes')
const cors = require('cors')
const path = require("path")
const { Catrouter } = require('./routes/CategoryRoute')
const { ProductRouter } = require('./routes/ProductRoute')
const PORT = process.env.PORT || 8000

//# --> DATABASE CONNECTION
const app = express()
connectDB()
dotenv.config()

//this is for test only
//* --> MIDDLEWARE
app.use(cors())
app.use(express.json())

//* --> Route
app.use('/api/v1/auth', router)
app.use('/api/v1/category', Catrouter)
app.use('/api/v1/product', ProductRouter)

// UnComment this in deployment
// app.use(express.static(path.join(__dirname,"./build")))
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, './build/index.html'))
// })

app.listen( PORT, () => {
    console.log(`Connected to express server ${PORT}`)
})



// create table products( idproduct varchar(255),firstName varchar(255),email varchar(255),uploadfile varchar(255),message varchar(255))