const Router = require('express')

const TableController = require('../controllers/TableController')

const tableRouter = new Router()

tableRouter.get('/tables', TableController.getAll)
tableRouter.get('/tables/:id', TableController.getOne)
tableRouter.post('/tables', TableController.create)
tableRouter.patch('/tables/:id', TableController.update)
tableRouter.delete('/tables/:id', TableController.delete)

module.exports = tableRouter
