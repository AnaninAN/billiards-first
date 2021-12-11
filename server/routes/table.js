const express = require('express')
const routerTable = express.Router()
const Table = require('../models/Table')

routerTable.get('/', async (req, res) => {
  const tables = await Table.find({})
  res.status(200).send(tables)
})

routerTable.get('/:id', async (req, res) => {
  const table = await Table.findById(req.params.id)
  res.status(200).send(table)
})

routerTable.post('/', async (req, res) => {
  let table = new Table(req.body)
  table = await table.save()
  res.status(201).send(table._id)
})

routerTable.patch('/:id', async (req, res) => {
  let table = await Table.findByIdAndUpdate(req.params.id, { $set: req.body })
  table = await Table.findById(req.params.id)
  res.status(200).send(table)
})

routerTable.delete('/:id', async (req, res) => {
  const table = await Table.findByIdAndDelete(req.params.id)
  res.status(200).send(table)
})

module.exports = routerTable
