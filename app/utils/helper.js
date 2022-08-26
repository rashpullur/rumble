const WinnerNft = require('../model/winnerNft.model')
const LooserNft = require('../model/looserNft.model')

const genrateRandomNumber = (min, max) => {
    let rarityBoost = 0
    let difference = max - min;

    // generate random number 
    let randomNum = Math.random();

    // multiply with difference 
    randomNum = Math.floor(randomNum * difference);

    // add with min value 
    randomNum = randomNum + min;

    return randomNum;
}

const calculateRarityBoost = (randomNum) => {
    let rarityBoost = 0

    switch (true) {
        case randomNum >= 6000 && randomNum <= 7000:
            rarityBoost = 0
            break;
        case randomNum >= 7001 && randomNum <= 8000:
            rarityBoost = 1
            break;
        case randomNum >= 8001 && randomNum <= 9000:
            rarityBoost = 2
            break;
        case randomNum >= 9001 && randomNum <= 9500:
            rarityBoost = 3
            break;
        case randomNum >= 9501 && randomNum <= 10000:
            rarityBoost = 4
            break;
        default:
            break;
    }
    return rarityBoost;
}

const curWinnerAndLooser = async (roundNumber) => {
    let usedNftIds = []

    const winnerNFTs = await WinnerNft.findOne({ roundNumber }, { nftList: 1, _id: 0 })
    const looserNFTs = await LooserNft.findOne({ roundNumber }, { nftList: 1, _id: 0 })

    if (winnerNFTs && winnerNFTs.nftList.length > 0) usedNftIds = [...usedNftIds, ...winnerNFTs.nftList]
    if (looserNFTs && looserNFTs.nftList.length > 0) usedNftIds = [...usedNftIds, ...looserNFTs.nftList]

    return usedNftIds
}

module.exports = {
    genrateRandomNumber,
    calculateRarityBoost,
    curWinnerAndLooser
}