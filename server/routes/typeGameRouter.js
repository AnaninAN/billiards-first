const Router = require('express')

const TypeGameController = require('../controllers/TypeGameController')

const typeGameRouter = new Router()

typeGameRouter.get('/type-games', TypeGameController.getAll)
typeGameRouter.get('/type-games/:id', TypeGameController.getOne)
typeGameRouter.post('/type-games', TypeGameController.create)
typeGameRouter.patch('/type-games/:id', TypeGameController.update)
typeGameRouter.delete('/type-games/:id', TypeGameController.delete)

module.exports = typeGameRouter
