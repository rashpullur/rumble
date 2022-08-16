const mongoose = require('mongoose')
const Schema = mongoose.Schema

const advantageChart = new Schema({
    element_name: {
        type: String,
        required: true
    },
    check_element: [{
        name: {
            type: String
        },
        value: {
            type: Number
        }
    }]
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('AdvantageChart', advantageChart)