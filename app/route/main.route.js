const express = require('express');
const router = express.Router();
const chartController = require('../controller/chart.controller')

router.post('/rumble', chartController.rumbleElements)

module.exports = router