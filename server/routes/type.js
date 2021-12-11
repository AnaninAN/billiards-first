const express = require('express')
const routerType = express.Router()
const Type = require('../models/Type')

routerType.get('/', async (req, res) => {
  const types = await Type.find({})
  res.status(200).send(types)
})

routerType.get('/:id', async (req, res) => {
  const type = await Type.findById(req.params.id)
  res.status(200).send(type)
})

routerType.post('/', async (req, res) => {
  let type = new Type(req.body)
  type = await type.save()
  res.status(201).send(type._id)
})

routerType.patch('/:id', async (req, res) => {
  let type = await Type.findByIdAndUpdate(req.params.id, { $set: req.body })
  type = await Type.findById(req.params.id)
  res.status(200).send(type)
})

routerType.delete('/:id', async (req, res) => {
  const type = await Type.findByIdAndDelete(req.params.id)
  res.status(200).send(type)
})

module.exports = routerType
