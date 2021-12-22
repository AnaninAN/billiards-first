const Router = require('express')

const GameController = require('../controllers/GameController')

const gameRouter = new Router()

gameRouter.get('/games', GameController.getAll)
gameRouter.get('/games/scoreboard/:id', GameController.getScoreboardOne)
gameRouter.get(
  '/games/scoreboard/restart/:id',
  GameController.scoreboardRestart
)
gameRouter.get('/games/:id', GameController.getOne)
gameRouter.post('/games', GameController.create)
gameRouter.patch('/games/:id', GameController.update)
gameRouter.delete('/games/:id', GameController.delete)

module.exports = gameRouter
