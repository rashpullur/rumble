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

// const { exec } = require("child_process");

// const upgradeScript = `metaboss update uri \
// --keypair ~/.config/solana/sovereignclient.json \
// --account ${nftToken} \
// --new-uri https://sovereign-nftt.s3.ap-south-1.amazonaws.com/${nftJson[0].fileNumber}.json`;


// exec("npm i aws-sdk", (error, stdout, stderr) => {
// console.log("stdout: " + stdout);
// console.log("stderr: " + stderr);
// if (error !== null) {
// console.log("exec error: " + error);
// }
// });

// https://sovereign-nftt.s3.ap-south-1.amazonaws.com/89.json