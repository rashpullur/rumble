const express = require('express')
require('dotenv').config()

const cors = require('cors')

//importing the routes
const adminRouter = require('./app/route/main.route')

//creating the server
const app = express()
app.use(cors())

// Database connection
require('./app/config/mongodb')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//accessing the routes
app.use(adminRouter);

//listening the server
app.listen(process.env.PORT, () => {
    console.log('server is running on port ' + process.env.PORT)
})