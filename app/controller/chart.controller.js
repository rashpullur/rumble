const AdvantageChart = require('../model/chart.model')
const HTTP = require("../constants/responseCode.constant");
    
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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
                ]
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



async function rumbleElements(req, res) {
    let element = ""
    try {
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
        
        // ==================== get each element's value ================

        // function getValue(element1, element2) {
        //     const getData = AdvantageChart.find({ element_name: element1, check_element: { $elemMatch: { name: element2 } } },
        //         { "check_element.$": 1, "element_name": 1 }) // $ (projection)
        //     return getData
        //     // return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': 'generated token: ', 'data': getData })     
    
        //     // let elementCheck =[]
        //     // for (var item of getData) {
        //     //     elementCheck = item.check_element
        //     // }
        //     // let val = 0
        //     // for (const item of elementCheck) {
        //     //     val = item.value
        //     // } 
        //     // return val
        // }
        
        // let val_A = getValue(elementA, elementB)
        // let val_B = getValue(elementB, elementA)
        
        const getA = await AdvantageChart.find({ element_name: elementA, check_element: { $elemMatch: { name: elementB } } },
        { "check_element.$": 1 , "element_name" : 1}) // $ (projection)
        
        let elementcheck =[]
        for (var item of getA) {
            elementcheck = item.check_element
        }
        let val_A = 0
        for (const item of elementcheck) {
            val_A = item.value
        }

        // check the 2nd element's value from db
        const getB = await AdvantageChart.find({ element_name: elementB, check_element: { $elemMatch: { name: elementA } } },
            { "check_element.$": 1 , "element_name" : 1}) // $ (projection)
        let elementCheck =[]
        for (var item of getB) {
            elementCheck = item.check_element
        }
        let val_B = 0
        for (const item of elementCheck) {
            val_B = item.value
        }
        
        console.log("value A: " + val_A  )
        console.log("value B: " + val_B + "\n" )
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

        function addWinner(element, token) {
            
        }

        if (elementalAttack_A > elementalAttack_B) {
            addWinner(elementA, tokenA)
            console.log(elementA + " elemental Wins!")
        } else {
            addWinner(elementB, tokenB)
            console.log(elementB + " elemental Wins!")
        }

        return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': 'generated token: ', 'data': getA })     

    } catch(e) {
        console.log(e)
        return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.INTERNAL_SERVER_ERROR, "message": "Something went wrong!" })
    }
}

module.exports = {
    rumbleElements
}