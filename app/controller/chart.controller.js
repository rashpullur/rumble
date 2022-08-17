const AdvantageChart = require('../model/chart.model')
const WonElement = require('../model/wonElement.model')
const LostElement = require('../model/lostElement.model')
const EliminatedElement = require('../model/eliminatedElement.model')
const HTTP = require("../constants/responseCode.constant")
const manageControllers = require('./manage.controller');

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
            if(!elementManager)continue
        }
        
        return
    } catch (e) {
        console.log(e);
        return
    }
})()

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

module.exports = {
    roundOne,
    roundTwo
}