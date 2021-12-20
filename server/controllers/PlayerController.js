const Player = require('../models/Player')

class PlayerController {
  static async create(req, res) {
    try {
      const player = await Player.create(req.body)
      res.json(player._id)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async getAll(req, res) {
    try {
      const players = await Player.find({})
      res.json(players)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async getOne(req, res) {
    try {
      const player = await Player.findById(req.params.id)
      res.json(player)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async update(req, res) {
    try {
      let player = await Player.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      player = await Player.findById(req.params.id)
      res.json(player)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async delete(req, res) {
    try {
      const player = await Player.findByIdAndDelete(req.params.id)
      res.json(player)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

module.exports = PlayerController
