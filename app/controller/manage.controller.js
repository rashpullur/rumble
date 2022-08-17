const AdvantageChart = require('../model/chart.model')
const WonElement = require('../model/wonElement.model')
const LostElement = require('../model/lostElement.model')
const HTTP = require("../constants/responseCode.constant");


async function addWinner(element, token, length, lengthLast) {
    try {
        const elementExist = await WonElement.findOne({ element_name: element })    
        
        if (elementExist) {
            if ((element == 'plant' || element == 'lightening') && (elementExist.elemental_id.length <= lengthLast)) {

                for (const item of elementExist.elemental_id) {
                   if (item == token) return "item added!"
                }

                const update = await WonElement.findOneAndUpdate({ element_name: element }, { "$push": { elemental_id: token } }, { new: true })   
                if (!update) return console.log("couldnt update winner!")
                
                return update
            } else if (!(element == 'plant' || element == 'lightening') && (elementExist.elemental_id.length <= length)) {


                for (const item of elementExist.elemental_id) {
                    if (item == token)  return "item added!"
                }

                const update = await WonElement.findOneAndUpdate({ element_name: element }, { "$push": { elemental_id: token } }, { new: true })   
                if (!update) return console.log("couldnt update winner!")
                
                return update
            } else {
                console.log("element array is already added! run again.")
            }
        } else {
            const addData = await new WonElement({ element_name: element, elemental_id: token }).save()
            if (!addData) return console.log("could not add winner!")
            return addData
        }

    } catch(e) {
        console.log(e)
    }
}

async function addLoser(element, token, length, lengthLast) {
    try {
        const elementExist = await LostElement.findOne({ element_name: element })
       
        if (elementExist ) {
            if ((element == 'plant' || element == 'lightening') && (elementExist.elemental_id.length <= lengthLast)) {


                for (const item of elementExist.elemental_id) {
                   if (item == token) return "id already added!"
                }

                const update = await LostElement.findOneAndUpdate({ element_name: element }, { "$push": { elemental_id: token } }, { new: true })   
                if (!update) return console.log("couldnt update winner!")
                
                return update
            } else if (!(element == 'plant' || element == 'lightening') && (elementExist.elemental_id.length <= length)) {


                for (const item of elementExist.elemental_id) {
                    if (item == token)  return "item added!"
                }

                const update = await LostElement.findOneAndUpdate({ element_name: element }, { "$push": { elemental_id: token } }, { new: true })   
                if (!update) return console.log("couldnt update winner!")
                
                return update
            } else {
                console.log("element array is already added! run again.")
            }
        } else {
            const addData = await new LostElement({ element_name: element, elemental_id: token }).save()
            if (!addData) return console.log("could not add winner!")
            return addData
        }
        

    } catch (e) {
        console.log(e) 
    }
}

async function removeFromWinner(element, token, length, lengthLast) {
    try {
        const elementExist = await WonElement.findOne({ element_name: element })    
        if (elementExist) {
            
        }

    } catch(e) {
        console.log(e)
    }
}

module.exports = {
    addWinner,
    addLoser,
    removeFromWinner
}