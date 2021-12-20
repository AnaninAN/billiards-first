const Router = require('express')

const PlayerController = require('../controllers/PlayerController')

const playerRouter = new Router()

playerRouter.get('/players', PlayerController.getAll)
playerRouter.get('/players/:id', PlayerController.getOne)
playerRouter.post('/players', PlayerController.create)
playerRouter.patch('/players/:id', PlayerController.update)
playerRouter.delete('/players/:id', PlayerController.delete)

module.exports = playerRouter
