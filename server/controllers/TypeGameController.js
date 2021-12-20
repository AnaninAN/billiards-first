const TypeGame = require('../models/TypeGame')

class TypeGameController {
  static async create(req, res) {
    try {
      const typeGame = await TypeGame.create(req.body)
      res.json(typeGame._id)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async getAll(req, res) {
    try {
      const typeGames = await TypeGame.find({})
      res.json(typeGames)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async getOne(req, res) {
    try {
      const typeGame = await TypeGame.findById(req.params.id)
      res.json(typeGame)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async update(req, res) {
    try {
      let typeGame = await TypeGame.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      typeGame = await TypeGame.findById(req.params.id)
      res.json(typeGame)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async delete(req, res) {
    try {
      const typeGame = await TypeGame.findByIdAndDelete(req.params.id)
      res.json(typeGame)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

module.exports = TypeGameController
