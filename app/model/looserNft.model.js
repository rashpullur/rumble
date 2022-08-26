const mongoose = require('mongoose')
const Schema = mongoose.Schema

const looserNftSchema = new Schema({
    roundNumber: {
        type: Number,
        required: true
    },
    nftList: {
        type: Array,
        default: []
    }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('LooserNft', looserNftSchema)