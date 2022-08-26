const express = require('express');
const router = express.Router();
const chartController = require('../controller/chart.controller')

router.post('/rumble', chartController.rumbleElements)
router.post('/rumbleNfts', chartController.rumbleNfts)
router.get('/generateExcel', chartController.generateExcel)

router.post('/rumbleRound1', chartController.roundOne)
router.post('/rumbleRound2', chartController.roundTwo)


module.exports = router