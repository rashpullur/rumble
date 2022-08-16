const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wonElement = new Schema({
    element_name: {
        type: String,
        required: true
    },
    element_id: {
        type: Array
    }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('WonElement', wonElement)