const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lostElement = new Schema({
    element_name: {
        type: String,
        required: true
    },
    elemental_id: {
        type: Array
    }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('LostElement', lostElement)