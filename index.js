const express = require('express')
// require('dotenv').config({ path: './config/.env' })

const cors = require('cors')

//importing the routes
const adminRouter = require('./app/route/main.route')

//creating the server
const app = express()
app.use(cors())

// Database connection
require('./app/config/mongodb')

//accessing the routes
app.use(adminRouter);

//listening the server
app.listen(3000, () => {
    console.log('server is running on port ' + 3000)
})