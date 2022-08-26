const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eliminatedElement = new Schema({
    element_name: {
        type: String,
        required: true
    },
    elemental_id: {
        type: Array
    }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('EliminatedElement', eliminatedElement)