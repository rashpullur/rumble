const AdvantageChart = require('../model/chart.model')

const Nft = require('../model/nft.model')
const WinnerNft = require('../model/winnerNft.model')
const LooserNft = require('../model/looserNft.model')
const NftBattel = require('../model/nftBattel.model')
const HTTP = require("../constants/responseCode.constant");
const excel = require('exceljs');
const { genrateRandomNumber, calculateRarityBoost, curWinnerAndLooser } = require('../utils/helper');


const WonElement = require('../model/wonElement.model')
const LostElement = require('../model/lostElement.model')
const EliminatedElement = require('../model/eliminatedElement.model')
const manageControllers = require('./manage.controller');


//Add default NFT records
(async function defaultNftData(req, res) {
    try {
        let defaultNftList = []
        const nftTypes = ['fire', 'water', 'air', 'earth', 'plant', 'lightening']

        let nftNumber = 1

        for (const nft of nftTypes) {
            if (['fire', 'water', 'air', 'earth'].includes(nft)) {
                for (let nftNo = 1; nftNo <= 10; nftNo++) {
                    const elementalPower = genrateRandomNumber(6000, 10000)
                    const rarityBoost = calculateRarityBoost(elementalPower)

                    defaultNftList.push({ nftNumber, nftType: nft, elementalPower, rarityBoost });
                    nftNumber++
                }
            } else if (['plant', 'lightening'].includes(nft)) {
                for (let nftNo = 1; nftNo <= 12; nftNo++) {
                    const elementalPower = genrateRandomNumber(6000, 10000)
                    const rarityBoost = calculateRarityBoost(elementalPower)

                    defaultNftList.push({ nftNumber, nftType: nft, elementalPower, rarityBoost });
                    nftNumber++
                }
            }
        }

        if (defaultNftList.length === 0) return

        for (const data of defaultNftList) {
            const nftDataExists = await Nft.findOne({ nftNumber: data.nftNumber, nftType: data.nftType })
            if (nftDataExists) continue

            const nftData = await Nft(data).save()
            if (!nftData) continue
        }

        return
    } catch (e) {
        console.log(e);
        return
    }
})();


// Advantage Chart
(async function defaultChart(req, res) {
    try {

        const defaultData = [
            {
                element_name: "fire",
                check_element: [
                    { name: "fire", value: 0 },
                    { name: "water", value: -20 },
                    { name: "air", value: 10 },
                    { name: "earth", value: -10 },
                    { name: "plant", value: 20 },
                    { name: "lightening", value: 0 },
                ],
                elemental_power: Array.from({length: 10}, (v, k) => k+1)
            },
            {
                element_name: "water",
                check_element: [
                    { name: "fire", value: 20 },
                    { name: "water", value: 0 },
                    { name: "air", value: -10 },
                    { name: "earth", value: 20 },
                    { name: "plant", value: -10 },
                    { name: "lightening", value: 20 },
                ],
                elemental_power: Array.from({length: 10}, (v, k) => k+11)
            },
            {
                element_name: "air",
                check_element: [
                    { name: "fire", value: -10 },
                    { name: "water", value: 10 },
                    { name: "air", value: 0 },
                    { name: "earth", value: -10 },
                    { name: "plant", value: 10 },
                    { name: "lightening", value: 0 },
                ],
                elemental_power: Array.from({length: 10}, (v, k) => k+21)
            },
            {
                element_name: "earth",
                check_element: [
                    { name: "fire", value: 10 },
                    { name: "water", value: -20 },
                    { name: "air", value: 10 },
                    { name: "earth", value: 0 },
                    { name: "plant", value: -10 },
                    { name: "lightening", value: 10 },
                ],
                elemental_power: Array.from({length: 10}, (v, k) => k+31)
            },
            {
                element_name: "plant",
                check_element: [
                    { name: "fire", value: -20 },
                    { name: "water", value: 10 },
                    { name: "air", value: -10 },
                    { name: "earth", value: 10 },
                    { name: "plant", value: 0 },
                    { name: "lightening", value: 10 },
                ],
                elemental_power: Array.from({length: 12}, (v, k) => k+41)
            },
            {
                element_name: "lightening",
                check_element: [
                    { name: "fire", value: 0 },
                    { name: "water", value: 20 },
                    { name: "air", value: 10 },
                    { name: "earth", value: -20 },
                    { name: "plant", value: -10 },
                    { name: "lightening", value: 0 },
                ],
                elemental_power: Array.from({length: 12}, (v, k) => k+53)
            }
        ]

        for (const data of defaultData) {
            const elementExists = await AdvantageChart.findOne({ element_name: data.element_name })
            if (elementExists) continue
            const elementManager = await AdvantageChart(data).save()
            if (!elementManager) continue
        }

        return
    } catch (e) {
        console.log(e);
        return
    }
})();

async function rumbleElements(req, res) {
    try {
        let element = ""

        const tokenA = Math.floor(Math.random() * 60)
        const tokenB = Math.floor(Math.random() * 60)
        
         function checkElement(token) {
            if (token >= 1 && token <= 10) {
                element = "fire"
            } else if (token >= 11 && token <= 20) {
                element = "water"
            } else if (token >= 21 && token <= 30) {
                element = "air"
            } else if (token >= 31 && token <= 40) {
                element = "earth"
            } else if (token >= 41 && token <= 50) {
                element = "plant"
            } else if (token >= 51 && token <= 60) {
                element = "lightening"
            } else {
                element = "not between 1 to 64"
            }
            return element
        }
        
        const elementA = checkElement(tokenA)
        const elementB = checkElement(tokenB)

        const getA = await AdvantageChart.findOne({ element_name: elementA, check_element: { $elemMatch: { name: elementB } } },
            { "check_element.$": 1, "element_name": 1 }) // $ (projection)

        return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': 'generated token: ', 'data': getA })
    } catch (e) {
        console.log(e)
        return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.INTERNAL_SERVER_ERROR, "message": "Something went wrong!" })  
    }
}

async function roundOne(req, res) {
    let element = ""
    try {
        // count lost and won elements
        const lostData = await LostElement.aggregate([
            { $project: { resultSize: { $size: "$elemental_id" } } }])
        let lostCount = 0
        for (const item of lostData) {
            lostCount += item.resultSize
        }
        const winData = await LostElement.aggregate([
            { $project: { resultSize: { $size: "$elemental_id" } } }])
        let winCount = 0
        for (const item of winData) {
            winCount += item.resultSize
        }

        if (lostCount < 32 && winCount < 32) {

            const tokenA = Math.floor(Math.random() * (64 - 1 + 1)) + 1   // Math.floor(Math.random() * 64)
            const tokenB = Math.floor(Math.random() * (64 - 1 + 1)) + 1
            
            function checkElement(token) {
                if (token >= 1 && token <= 10) {
                    element = "fire"
                } else if (token >= 11 && token <= 20) {
                    element = "water"
                } else if (token >= 21 && token <= 30) {
                    element = "air"
                } else if (token >= 31 && token <= 40) {
                    element = "earth"
                } else if (token >= 41 && token <= 52) {
                    element = "plant"
                } else if (token >= 53 && token <= 64) {
                    element = "lightening"
                } else {
                    element = "not between 1 to 64"
                }
                return element
            }
            
            const elementA = checkElement(tokenA) 
            const elementB = checkElement(tokenB)

            console.log("\nToken A: " + tokenA + "------> element: " + elementA)
            console.log("Token B: " + tokenB + "------> element: " + elementB + "\n")
            
            const lostExist = await LostElement.findOne({ $or: [{ elemental_id: tokenA }, { elemental_id: tokenB }] }) 
            const wonExist = await WonElement.findOne({ $or: [{ elemental_id: tokenA }, { elemental_id: tokenB }] })
            if (lostExist || wonExist ) {
                console.log("element already in database!!!")
                return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': ' element already in db! ', 'data': tokenA + " : " + elementA + "    " + tokenB + " : " + elementB })
            } 
           
        
            const getA = await AdvantageChart.find({ element_name: elementA, check_element: { $elemMatch: { name: elementB } } },
                { "check_element.$": 1, "element_name": 1 }) // $ (projection)
        
            let elementcheck = []
            for (var item of getA) {
                elementcheck = item.check_element
            }
            let val_A = 0
            for (const item of elementcheck) {
                val_A = item.value
            }

            // check the 2nd element's value from db
            const getB = await AdvantageChart.find({ element_name: elementB, check_element: { $elemMatch: { name: elementA } } },
                { "check_element.$": 1, "element_name": 1 }) // $ (projection)
            let elementCheck = []
            for (var item of getB) {
                elementCheck = item.check_element
            }
            let val_B = 0
            for (const item of elementCheck) {
                val_B = item.value
            }
        
            console.log("value A: " + val_A)
            console.log("value B: " + val_B + "\n")
            if (val_A == 0) return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': ' value got is 0 ', 'data': {} })
        
            // Attack power = Elemental Power + (- 20% to +20 % type advantage) + (0 to 3000 Random roll)
            // Fire elemental Attack power = (8900+ (-10%) + 1965) = 9975
            // Earth elemental attack power = (7600 + (+10%) + 2439) = 10799
            // Earth elemental Wins!
        
            function attackPower(token, val) {
                let randomRoll = Math.floor(Math.random() * 3000) // 0 - 3000
                let calc = token + (val / 100) + randomRoll
                return calc
            }

            let elementalAttack_A = attackPower(tokenA, val_A)
            let elementalAttack_B = attackPower(tokenA, val_B)

            console.log(elementA + " Attack Power: " + elementalAttack_A)
            console.log(elementB + " Attack Power: " + elementalAttack_B + "\n")

            // declare array length for won and lost element here being 5,5,5,5,6,6
            const length = 4 // 0-4 = 5
            const lengthLast = 5 // 0-5 = 6
        
            if (elementalAttack_A > elementalAttack_B) {
                console.log(elementA + " elemental Wins!")
                const winner = manageControllers.addWinner(elementA, tokenA, length, lengthLast)
                if (!winner) return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.BAD_REQUEST, "message": "could not add winner", data: {} })
            
                const lost = manageControllers.addLoser(elementB, tokenB, length, lengthLast)
                if (!lost) return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.BAD_REQUEST, "message": "could not add loser", data: {} })

                return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': 'Added Winner', 'data': getA })
            

            } else {
                console.log(elementB + " elemental Wins!")
                const winner = manageControllers.addWinner(elementB, tokenB, length, lengthLast)
                if (!winner) return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.BAD_REQUEST, "message": "could not add winner", data: {} })
            
                const lost = manageControllers.addLoser(elementA, tokenA, length, lengthLast)
                if (!lost) return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.BAD_REQUEST, "message": "could not add loser", data: {} })
            
                return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': 'Added Winner', 'data': getB })

            }
        }
        return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': ' round one completed! ', 'data': {} })     

    } catch(e) {
        console.log(e)
        return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.INTERNAL_SERVER_ERROR, "message": "Something went wrong!" })
    }
}

async function roundTwo(req, res) {
    try {
        
        // count lost and won elements
        const lostData = await LostElement.aggregate([
                { $project: { resultSize: { $size: "$elemental_id" } } }])
        let lostCount = 0
        for (const item of lostData) {
            lostCount += item.resultSize
        }
        const winData = await WonElement.aggregate([
            { $project: { resultSize: { $size: "$elemental_id" } } }])
        let winCount = 0
        for (const item of winData) {
            winCount += item.resultSize
        }

        if (lostCount == 32 && winCount == 32) {
            // add lost elements to eliminated elements
            // empty lost elements 
            
            var Object=[];
            await LostElement.find(function (err, data) {
                if (err) return console.error(err);
                Object=data;
                console.log(Object);

                EliminatedElement.insertMany(Object, function(error, docs) {
                    if (err) return console.error(err);
                    LostElement.deleteMany( function (err) {});
                });

            })
        }
        
        // random token generate from the won elements table
        const tokenA = Math.floor(Math.random() * (64 - 1 + 1)) + 1   
        const tokenB = Math.floor(Math.random() * (64 - 1 + 1)) + 1

        const tokenExist = await WonElement.findOne({ $or: [{ elemental_id: tokenA }, { elemental_id: tokenB }] })
        if (!tokenExist) return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': 'Token is eliminated!', 'data': {} })
        
        
        // ===== remove lost element from won elements table =====
        let element = ""

        const elementA = checkElement(tokenA) 
        const elementB = checkElement(tokenB)
        
        console.log("A element : " + elementA + "  token: " + tokenA)
        console.log("B element : " + elementB + "  token: " + tokenB)
        
        const getA = await AdvantageChart.find({ element_name: elementA, check_element: { $elemMatch: { name: elementB } } },
            { "check_element.$": 1, "element_name": 1 }) // $ (projection)
            
        let elementcheck = []
        for (var item of getA) {
            elementcheck = item.check_element
        }
        let val_A = 0
        for (const item of elementcheck) {
            val_A = item.value
        }
        
        // check the 2nd element's value from db
        const getB = await AdvantageChart.find({ element_name: elementB, check_element: { $elemMatch: { name: elementA } } },
            { "check_element.$": 1, "element_name": 1 }) // $ (projection)
        let elementCheck = []
        for (var item of getB) {
            elementCheck = item.check_element
        }
        let val_B = 0
        for (const item of elementCheck) {
            val_B = item.value
        }
    
        console.log("\n" + elementA + " value A: " + val_A)
        console.log(elementB + " value B: " + val_B + "\n")

        if (val_A == 0) return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': ' value got is 0 ', 'data': {} })
        
        // Attack power = Elemental Power + (- 20% to +20 % type advantage) + (0 to 3000 Random roll)
        // Fire elemental Attack power = (8900+ (-10%) + 1965) = 9975
        // Earth elemental attack power = (7600 + (+10%) + 2439) = 10799
        // Earth elemental Wins!
        
        function attackPower(token, val) {
            let randomRoll = Math.floor(Math.random() * 3000) // 0 - 3000
            return token + (val / 100) + randomRoll    
        }
        
        let elementalAttack_A = attackPower(tokenA, val_A)
        let elementalAttack_B = attackPower(tokenA, val_B)
        
        console.log(elementA + " Attack Power: " + elementalAttack_A)
        console.log(elementB + " Attack Power: " + elementalAttack_B + "\n")
        
        // decrease won elements and lost elements array length : here being: 2,2,2,2,4,4
        const lengthLast = 3 // 0-3 = 4
        const length = 1 // 0-1 = 2
        
        
        if (elementalAttack_A > elementalAttack_B) {
            console.log(elementA + " elemental Wins!")
        
            const lost = manageControllers.addLoser(elementB, tokenB, length, lengthLast)
            if (!lost) return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.BAD_REQUEST, "message": "could not add loser", data: {} })

            // remove the lost winner

            return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': 'Added Winner', 'data': getA })
        

        } else {
            console.log(elementB + " elemental Wins!")
            const winner = manageControllers.addWinner(elementB, tokenB, length, lengthLast)
            if (!winner) return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.BAD_REQUEST, "message": "could not add winner", data: {} })
        
            const lost = manageControllers.addLoser(elementA, tokenA, length, lengthLast)
            if (!lost) return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.BAD_REQUEST, "message": "could not add loser", data: {} })
        
            return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': 'Added Winner', 'data': getB })

        }


        return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': ' round two ', 'data': "Token A: " + tokenA + " Token B: " + tokenB })
    } catch (e) {
        console.log(e)
        return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.INTERNAL_SERVER_ERROR, "message": "Something went wrong!" })  
    }
}

async function rumbleNfts(req, res) {
    try {
        const { roundNumber } = req.body

        let totalNumOfNft = 0

        if (roundNumber === 1) totalNumOfNft = await Nft.find().count()
        else {
            const winnerOfPrveRound = await WinnerNft.findOne({ roundNumber: roundNumber - 1 })
            if (winnerOfPrveRound && winnerOfPrveRound.nftList.length > 0) totalNumOfNft = winnerOfPrveRound.nftList.length
        }

        if (totalNumOfNft === 0 || (totalNumOfNft !== 2 && (totalNumOfNft / 2) % 2 !== 0)) return res.status(HTTP.SUCCESS).send({ 'status': false, 'code': HTTP.BAD_REQUEST, 'message': 'Invalid round number!', 'data': {} })

        for (let index = 1; index <= (totalNumOfNft / 2); index++) {
            let winnerNFT
            let looserNFT
            let availableNft
            let sameNftsSelected = null
            let candidate1 = {}
            let candidate2 = {}
            let attackPowerDiff = 0


            if (roundNumber === 1) {
                const usedNftIdsOfCurRound = await curWinnerAndLooser(roundNumber)
                availableNft = await Nft.find({ _id: { $nin: usedNftIdsOfCurRound } }, { nftNumber: 1, nftType: 1, elementalPower: 1, rarityBoost: 1 })
            } else {
                let availableNftIds = []
                let allWinnerNftIds = []
                const winnerOfPrevRound = await WinnerNft.findOne({ roundNumber: roundNumber - 1 })

                if (winnerOfPrevRound && winnerOfPrevRound.nftList.length > 0) allWinnerNftIds = winnerOfPrevRound.nftList
                const usedNftIdsOfCurRound = await curWinnerAndLooser(roundNumber)

                if (allWinnerNftIds.length === 0) return res.status(HTTP.SUCCESS).send({ 'status': false, 'code': HTTP.BAD_REQUEST, 'message': 'Invalid round number!', 'data': {} })

                for (const nftId of allWinnerNftIds) {
                    var isInArray = usedNftIdsOfCurRound.some((useredNftId) => useredNftId.equals(nftId))
                    if (!isInArray) availableNftIds.push(nftId)
                }

                // availableNft = await Nft.find({ _id: { $in: [...availableNftIds] } }, { nftNumber: 1, nftType: 1, elementalPower: 1 })
                availableNft = await Nft.find({ _id: { $in: [...availableNftIds] } }, { nftNumber: 1, nftType: 1, elementalPower: 1, rarityBoost: 1 })
            }

            if (availableNft.length === 0) return res.status(HTTP.SUCCESS).send({ 'status': false, 'code': HTTP.BAD_REQUEST, 'message': 'No nfts are available to compare!', 'data': {} })

            let nftA
            let nftB

            while (sameNftsSelected === null || sameNftsSelected === true) {
                nftA = Math.floor(Math.random() * availableNft.length)
                nftB = Math.floor(Math.random() * availableNft.length)
                if (nftA === nftB) sameNftsSelected = true
                else sameNftsSelected = false
            }

            nftA = availableNft[nftA]
            nftB = availableNft[nftB]

            const getA = await AdvantageChart.findOne({ element_name: nftA.nftType, check_element: { $elemMatch: { name: nftB.nftType } } }, { "check_element.$": 1, "element_name": 1 })

            const getB = await AdvantageChart.findOne({ element_name: nftB.nftType, check_element: { $elemMatch: { name: nftA.nftType } } }, { "check_element.$": 1, "element_name": 1 })

            const randomRollOfA = genrateRandomNumber(0, 3000)
            const randomRollOfB = genrateRandomNumber(0, 3000)

            const AttackPowerOfA = nftA.elementalPower + (nftA.elementalPower * (getA.check_element[0].value / 100)) + (nftA.elementalPower * (nftA.rarityBoost / 100)) + randomRollOfA

            const AttackPowerOfB = nftB.elementalPower + (nftB.elementalPower * (getB.check_element[0].value / 100)) + (nftB.elementalPower * (nftB.rarityBoost / 100)) + randomRollOfB

            if (AttackPowerOfA > AttackPowerOfB) {
                winnerNFT = nftA
                looserNFT = nftB

                candidate1 = {
                    nftNumber: winnerNFT.nftNumber,
                    nftType: winnerNFT.nftType,
                    elementalPower: winnerNFT.elementalPower,
                    percentage: getA.check_element[0].value,
                    rarityBoost: winnerNFT.rarityBoost,
                    randomRoll: randomRollOfA,
                    attackPower: AttackPowerOfA
                }

                candidate2 = {
                    nftNumber: looserNFT.nftNumber,
                    nftType: looserNFT.nftType,
                    elementalPower: looserNFT.elementalPower,
                    percentage: getB.check_element[0].value,
                    rarityBoost: looserNFT.rarityBoost,
                    randomRoll: randomRollOfB,
                    attackPower: AttackPowerOfB
                }

                attackPowerDiff = AttackPowerOfA - AttackPowerOfB
            } else if (AttackPowerOfA < AttackPowerOfB) {
                winnerNFT = nftB
                looserNFT = nftA

                candidate1 = {
                    nftNumber: winnerNFT.nftNumber,
                    nftType: winnerNFT.nftType,
                    elementalPower: winnerNFT.elementalPower,
                    percentage: getB.check_element[0].value,
                    rarityBoost: winnerNFT.rarityBoost,
                    randomRoll: randomRollOfB,
                    attackPower: AttackPowerOfB
                }

                candidate2 = {
                    nftNumber: looserNFT.nftNumber,
                    nftType: looserNFT.nftType,
                    elementalPower: looserNFT.elementalPower,
                    percentage: getA.check_element[0].value,
                    rarityBoost: looserNFT.rarityBoost,
                    randomRoll: randomRollOfA,
                    attackPower: AttackPowerOfA
                }

                attackPowerDiff = AttackPowerOfB - AttackPowerOfA
            } else if (AttackPowerOfA === AttackPowerOfB) {
                return res.status(HTTP.SUCCESS).send({ 'status': false, 'code': HTTP.BAD_REQUEST, 'message': "It's tie", 'data': {} })
            } else {
                return res.status(HTTP.SUCCESS).send({ 'status': false, 'code': HTTP.BAD_REQUEST, 'message': 'Invalid NFT data!', 'data': {} })
            }

            const winnerNFTData = await WinnerNft.findOneAndUpdate({ roundNumber }, { $push: { nftList: winnerNFT._id } }, { upsert: true, returnNewDocument: true });
            const looserNFTData = await LooserNft.findOneAndUpdate({ roundNumber }, { $push: { nftList: looserNFT._id } }, { upsert: true, returnNewDocument: true });

            const battelInfo = {
                candidate1,
                candidate2,
                winnerNft: winnerNFT._id,
                looserNft: looserNFT._id,
                attackPowerDiff
            }

            const nftBattelData = await NftBattel.findOneAndUpdate({ roundNumber }, { "$push": { "battels": battelInfo } }, { upsert: true, returnNewDocument: true })
        }

        return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': `Battle is finished for day ${roundNumber}`, 'data': {} })
    } catch (e) {
        console.log(e)
        return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.INTERNAL_SERVER_ERROR, "message": "Something went wrong!" })
    }
}

async function generateExcel(req, res) {
    try {
        const { roundNumber } = req.query
        var batteldata = []
        var sortedBattelData = []

        batteldata = await NftBattel.findOne({ roundNumber })

        if (!batteldata || !batteldata.battels || (batteldata.battels && batteldata.battels.length === 0)) return res.status(HTTP.SUCCESS).send({ 'status': false, 'code': HTTP.NOT_FOUND, 'message': 'Battel data not found!', data: {} })

        let xmlData = [];
        let sortedXmlData = [];

        //battel wise data
        batteldata.battels.forEach((battel) => {
            const { candidate1, candidate2 } = battel
            xmlData.push({
                roundName: batteldata.roundNumber ? batteldata.roundNumber : null,

                candidate1Number: candidate1.nftNumber ? candidate1.nftNumber : null,
                candidate1NftType: candidate1.nftType ? candidate1.nftType : null,
                candidate1ElementalPower: candidate1.elementalPower ? candidate1.elementalPower : null,
                candidate1Percentage: candidate1.percentage ? candidate1.elementalPower * (candidate1.percentage / 100) : 0,
                candidate1RarityBoost: candidate1.rarityBoost ? candidate1.elementalPower * (candidate1.rarityBoost / 100) : 0,
                candidate1RandomRoll: candidate1.randomRoll ? candidate1.randomRoll : null,
                candidate1AttackPower: candidate1.attackPower ? candidate1.attackPower : null,

                candidate2Number: candidate2.nftNumber ? candidate2.nftNumber : null,
                candidate2NftType: candidate2.nftType ? candidate2.nftType : null,
                candidate2ElementalPower: candidate2.elementalPower ? candidate2.elementalPower : null,
                candidate2Percentage: candidate2.percentage ? candidate2.elementalPower * (candidate2.percentage / 100) : 0,
                candidate2RarityBoost: candidate2.rarityBoost ? candidate2.elementalPower * (candidate2.rarityBoost / 100) : 0,
                candidate2RandomRoll: candidate2.randomRoll ? candidate2.randomRoll : null,
                candidate2AttackPower: candidate2.attackPower ? candidate2.attackPower : null,

                winnerNftId: battel.winnerNft ? battel.winnerNft.toString() : null,
                looserNftId: battel.looserNft ? battel.looserNft.toString() : null,

                winnerNftName: candidate1.nftNumber ? candidate1.nftNumber : null,
                looserNftName: candidate2.nftNumber ? candidate2.nftNumber : null,

                attackPowerDiff: battel.attackPowerDiff ? battel.attackPowerDiff.toString() : 0
            });
        })

        //attack power wise data
        sortedBattelData = batteldata.battels.sort((a, b) => b.attackPowerDiff - a.attackPowerDiff)

        let rank = 1
        sortedBattelData.forEach((battel) => {
            const { candidate1, candidate2 } = battel
            sortedXmlData.push({
                roundName: batteldata.roundNumber ? batteldata.roundNumber : null,

                candidate1Number: candidate1.nftNumber ? candidate1.nftNumber : null,
                candidate1NftType: candidate1.nftType ? candidate1.nftType : null,
                candidate1ElementalPower: candidate1.elementalPower ? candidate1.elementalPower : null,
                candidate1Percentage: candidate1.percentage ? candidate1.elementalPower * (candidate1.percentage / 100) : 0,
                candidate1RarityBoost: candidate1.rarityBoost ? candidate1.elementalPower * (candidate1.rarityBoost / 100) : 0,
                candidate1RandomRoll: candidate1.randomRoll ? candidate1.randomRoll : null,
                candidate1AttackPower: candidate1.attackPower ? candidate1.attackPower : null,

                candidate2Number: candidate2.nftNumber ? candidate2.nftNumber : null,
                candidate2NftType: candidate2.nftType ? candidate2.nftType : null,
                candidate2ElementalPower: candidate2.elementalPower ? candidate2.elementalPower : null,
                candidate2Percentage: candidate2.percentage ? candidate2.elementalPower * (candidate2.percentage / 100) : 0,
                candidate2RarityBoost: candidate2.rarityBoost ? candidate2.elementalPower * (candidate2.rarityBoost / 100) : 0,
                candidate2RandomRoll: candidate2.randomRoll ? candidate2.randomRoll : null,
                candidate2AttackPower: candidate2.attackPower ? candidate2.attackPower : null,

                winnerNftId: battel.winnerNft ? battel.winnerNft.toString() : null,
                looserNftId: battel.looserNft ? battel.looserNft.toString() : null,

                winnerNftName: candidate1.nftNumber ? candidate1.nftNumber : null,
                looserNftName: candidate2.nftNumber ? candidate2.nftNumber : null,

                attackPowerDiff: battel.attackPowerDiff ? battel.attackPowerDiff.toString() : 0,
                winnerRank: rank
            });
            rank++
        })


        //create workbook
        let workbook = new excel.Workbook();

        let worksheet = workbook.addWorksheet("Battel");
        let sortedWorksheet = workbook.addWorksheet("Sorted Battel");

        worksheet.columns = [
            { header: "Round number", key: "roundName", width: 25 },

            { header: "Candidate1 Name", key: "candidate1Number", width: 25 },
            { header: "Candidate1 Type", key: "candidate1NftType", width: 25 },
            { header: "Candidate1 Elemental Power", key: "candidate1ElementalPower", width: 25 },
            { header: "Candidate1 Percentage", key: "candidate1Percentage", width: 25 },
            { header: "Candidate1 Rarity Boost", key: "candidate1RarityBoost", width: 25 },
            { header: "Candidate1 Random Roll", key: "candidate1RandomRoll", width: 25 },
            { header: "Candidate1 Attack Power", key: "candidate1AttackPower", width: 25 },

            { header: "Candidate2 Name", key: "candidate2Number", width: 25 },
            { header: "Candidate2 Type", key: "candidate2NftType", width: 25 },
            { header: "Candidate2 Elemental Power", key: "candidate2ElementalPower", width: 25 },
            { header: "Candidate2 Percentage", key: "candidate2Percentage", width: 25 },
            { header: "Candidate2 Rarity Boost", key: "candidate2RarityBoost", width: 25 },
            { header: "Candidate2 Random Roll", key: "candidate2RandomRoll", width: 25 },
            { header: "Candidate2 Attack Power", key: "candidate2AttackPower", width: 25 },

            { header: "Winner Nft ID", key: "winnerNftId", width: 25 },
            { header: "Looser Nft ID", key: "looserNftId", width: 25 },

            { header: "Winner Nft Name", key: "winnerNftName", width: 25 },
            { header: "Looser Nft Name", key: "looserNftName", width: 25 },

            { header: "Attack Power Differance", key: "attackPowerDiff", width: 25 },
        ];

        sortedWorksheet.columns = [
            { header: "Round number", key: "roundName", width: 25 },

            { header: "Candidate1 Name", key: "candidate1Number", width: 25 },
            { header: "Candidate1 Type", key: "candidate1NftType", width: 25 },
            { header: "Candidate1 Elemental Power", key: "candidate1ElementalPower", width: 25 },
            { header: "Candidate1 Rercentage", key: "candidate1Percentage", width: 25 },
            { header: "Candidate1 Random Roll", key: "candidate1RandomRoll", width: 25 },
            { header: "Candidate1 Attack Power", key: "candidate1AttackPower", width: 25 },

            { header: "Candidate2 Name", key: "candidate2Number", width: 25 },
            { header: "Candidate2 Type", key: "candidate2NftType", width: 25 },
            { header: "Candidate2 Elemental Power", key: "candidate2ElementalPower", width: 25 },
            { header: "Candidate2 Percentage", key: "candidate2Percentage", width: 25 },
            { header: "Candidate2 Random Roll", key: "candidate2RandomRoll", width: 25 },
            { header: "Candidate2 Attack Power", key: "candidate2AttackPower", width: 25 },

            { header: "Winner Nft ID", key: "winnerNftId", width: 25 },
            { header: "Looser Nft ID", key: "looserNftId", width: 25 },

            { header: "Winner Nft Name", key: "winnerNftName", width: 25 },
            { header: "Looser Nft Name", key: "looserNftName", width: 25 },

            { header: "Attack Power Differance", key: "attackPowerDiff", width: 25 },
            { header: "Winner Rank", key: "winnerRank", width: 10 },

        ];

        // Add Array Rows
        worksheet.addRows(xmlData);
        sortedWorksheet.addRows(sortedXmlData);

        // res is a Stream object
        await res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );

        await res.setHeader(
            "Content-Disposition",
            "attachment; filename=" + `battelRound-${batteldata.roundNumber}.xlsx`
        );

        return workbook.xlsx.write(res).then(() => {
            res.status(200).end();
        });
    } catch (e) {
        console.log(e)
        return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.INTERNAL_SERVER_ERROR, "message": "Something went wrong!", data: {} })
    }
}

module.exports = {
    rumbleElements,
    rumbleNfts,
    generateExcel

    roundOne,
    roundTwo
}