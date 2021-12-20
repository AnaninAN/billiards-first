const Table = require('../models/Table')

class TableController {
  static async create(req, res) {
    try {
      const table = await Table.create(req.body)
      res.json(table._id)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async getAll(req, res) {
    try {
      const tables = await Table.find({})
      res.json(tables)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async getOne(req, res) {
    try {
      const table = await Table.findById(req.params.id)
      res.json(table)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async update(req, res) {
    try {
      let table = await Table.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      table = await Table.findById(req.params.id)
      res.json(table)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async delete(req, res) {
    try {
      const table = await Table.findByIdAndDelete(req.params.id)
      res.json(table)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

module.exports = TableController
