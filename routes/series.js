const express = require('express')
const seriesController = require('../controllers/series')

const router = express.Router()

router.get('/', seriesController.index)
router.get('/nova', seriesController.nova)

module.exports = router