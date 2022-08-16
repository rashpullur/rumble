const mongoose = require('mongoose')

function mongoConnect() {
    // Database connection
    mongoose.connect("mongodb://localhost:27017/rumble-api", { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("DB connection successful!"))
        .catch((err) => {
            console.log(err)
            console.log("Error connecting DB!")
        });
}

module.exports = mongoConnect()