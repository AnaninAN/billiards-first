const { json } = require('express')
const TypeGame = require('../models/TypeGame')

class TypeGameController {
  static async create(req, res) {
    try {
      const typeGame = await TypeGame.create(req.body)
      return res.json(typeGame._id)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async getAll(req, res) {
    try {
      const typeGames = await TypeGame.find({})
      return res.json(typeGames)
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
      const typeGame = await TypeGame.findById(id)
      return res.json(typeGame)
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
      let typeGame = await TypeGame.findByIdAndUpdate(id, {
        $set: req.body,
      })
      typeGame = await TypeGame.findById(id)
      return res.json(typeGame)
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
      const typeGame = await TypeGame.findByIdAndDelete(id)
      return res.json(typeGame)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

module.exports = TypeGameController
