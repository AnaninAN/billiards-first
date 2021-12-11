const express = require('express')
const routerGame = express.Router()
const Game = require('../models/Game')

routerGame.get('/', async (req, res) => {
  const games = await Game.find({})
  res.status(200).send(games)
})

routerGame.get('/:id', async (req, res) => {
  const game = await Game.findById(req.params.id)
  res.status(200).send(game)
})

routerGame.post('/', async (req, res) => {
  let game = new Game(req.body)
  game = await game.save()
  res.status(201).send(game._id)
})

routerGame.patch('/:id', async (req, res) => {
  let game = await Game.findByIdAndUpdate(req.params.id, { $set: req.body })
  game = await Game.findById(req.params.id)
  res.status(200).send(game)
})

routerGame.delete('/:id', async (req, res) => {
  const game = await Game.findByIdAndDelete(req.params.id)
  res.status(200).send(game)
})

module.exports = routerGame
