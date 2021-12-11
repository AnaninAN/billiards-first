const express = require('express')
const routerPlayer = express.Router()
const Player = require('../models/Player')

routerPlayer.get('/', async (req, res) => {
  const players = await Player.find({})
  res.status(200).send(players)
})

routerPlayer.get('/:id', async (req, res) => {
  const player = await Player.findById(req.params.id)
  res.status(200).send(player)
})

routerPlayer.post('/', async (req, res) => {
  let player = new Player(req.body)
  player = await player.save()
  res.status(201).send(player._id)
})

routerPlayer.patch('/:id', async (req, res) => {
  let player = await Player.findByIdAndUpdate(req.params.id, { $set: req.body })
  player = await Player.findById(req.params.id)
  res.status(200).send(player)
})

routerPlayer.delete('/:id', async (req, res) => {
  const player = await Player.findByIdAndDelete(req.params.id)
  res.status(200).send(player)
})

module.exports = routerPlayer
