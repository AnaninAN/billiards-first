const events = require('events')

const Game = require('../models/Game')
const emitter = new events.EventEmitter()

emitter.setMaxListeners(0)

class GameController {
  static async create(req, res) {
    try {
      const game = await Game.create(req.body)
      res.json(game._id)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async getAll(req, res) {
    try {
      const games = await Game.find({})
      res.json(games)

      emitter.emit('game', game)
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
      const game = await Game.findById(id)
      res.json(game)
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
      let game = await Game.findByIdAndUpdate(id, { $set: req.body })
      game = await Game.findById(id)
      res.json(game)

      emitter.emit('game', game)
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
      const game = await Game.findByIdAndDelete(id)
      res.json(game)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  static async getScoreboardOne(req, res) {
    res.writeHead(200, {
      Connection: 'keep-alive',
      'Content-type': 'text/event-stream',
      'Cache-Control': 'no-cache',
    })

    emitter.on('game', (game) => {
      if (game.table && game.table.id === req.params.id) {
        res.write(`data: ${JSON.stringify(game)} \n\n`)
        return
      }
      res.write(`data: ${{}} \n\n`)
    })
  }
}

module.exports = GameController
