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
        const tokenA = Math.floor(Math.random() * 64)
        const tokenB = Math.floor(Math.random() * 64)
        
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
        console.log("Token A: " + tokenA + " element: " + elementA)
        console.log("Token B: " + tokenB + " element: " + elementB + "\n")
        
        const getA = await AdvantageChart.find({ element_name: elementA, check_element: { $elemMatch: { name: elementB } } },
        { "check_element.$": 1 , "element_name" : 1}) // $ (projection)
        

        return res.status(HTTP.SUCCESS).send({ 'status': true, 'code': HTTP.SUCCESS, 'message': 'generated token: ', 'data': getA })     

    } catch(e) {
        console.log(e)
        return res.status(HTTP.SUCCESS).send({ "status": false, 'code': HTTP.INTERNAL_SERVER_ERROR, "message": "Something went wrong!" })
    }
}

module.exports = {
    rumbleElements
}