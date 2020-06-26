const express = require('express')
const pagesController = require('../controllers/pages')

const router = express.Router()

router.get('/', pagesController.index)
router.get('/sobre', pagesController.sobre)

module.exports = router