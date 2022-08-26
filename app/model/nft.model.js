const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nftSchema = new Schema({
    nftNumber: {
        type: Number,
        required: true,
        unique: true
    },
    nftType: {
        type: String,
        required: true
    },
    elementalPower: {
        type: Number,
        required: true
    },
    rarityBoost: {
        type: Number,
        required: true
    }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('Nft', nftSchema)