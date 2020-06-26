const express = require('express')
const seriesController = require('../controllers/series')

const router = express.Router()
const Serie = require('../models/series')
const models = {
    Serie
}
router.get('/', seriesController.index.bind(null, models))
router.get('/nova', seriesController.novaForm)
router.post('/nova', seriesController.novaProcess.bind(null, models))

router.get('/excluir/:id', seriesController.excluir.bind(null, models))
router.get('/editar/:id', seriesController.editarForm.bind(null, models))
router.post('/editar/:id', seriesController.editarProcess.bind(null, models))

module.exports = router