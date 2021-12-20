const Player = require('../models/Player')

class PlayerController {
  static async create(req, res) {
    try {
      const player = await Player.create(req.body)
      return res.json(player._id)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async getAll(req, res) {
    try {
      const players = await Player.find({})
      return res.json(players)
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
      const player = await Player.findById(id)
      return res.json(player)
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
      let player = await Player.findByIdAndUpdate(id, {
        $set: req.body,
      })
      player = await Player.findById(id)
      return res.json(player)
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
      const player = await Player.findByIdAndDelete(id)
      return res.json(player)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

module.exports = PlayerController
