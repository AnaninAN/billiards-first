const Table = require('../models/Table')

class TableController {
  static async create(req, res) {
    try {
      const table = await Table.create(req.body)
      return res.json(table._id)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async getAll(req, res) {
    try {
      const tables = await Table.find({})
      return res.json(tables)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params
      if (!id) {
        res.status(400), json({ message: 'ID не указан' })
      }
      const table = await Table.findById(id)
      return res.json(table)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params
      if (!id) {
        res.status(400), json({ message: 'ID не указан' })
      }
      let table = await Table.findByIdAndUpdate(id, {
        $set: req.body,
      })
      table = await Table.findById(id)
      return res.json(table)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params
      if (!id) {
        res.status(400), json({ message: 'ID не указан' })
      }
      const table = await Table.findByIdAndDelete(id)
      return res.json(table)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

module.exports = TableController
