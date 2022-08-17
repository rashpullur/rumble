const express = require('express');
const router = express.Router();
const chartController = require('../controller/chart.controller')

router.post('/rumbleRound1', chartController.roundOne)
router.post('/rumbleRound2', chartController.roundTwo)

module.exports = router