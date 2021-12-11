const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Описывается структура коллекции player
const gameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    games: {
      type: Number,
      required: true,
    },
    balls: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
    history: {
      type: Array,
      required: true,
    },
    table: {
      type: String,
      required: false,
    },
    player1: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      surname: {
        type: String,
        required: true,
      },
      patronymic: {
        type: String,
        required: true,
      },
      pocketedBalls: {
        type: Number,
        required: true,
      },
      wonGames: {
        type: Number,
        required: true,
      },
    },
    player2: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      surname: {
        type: String,
        required: true,
      },
      patronymic: {
        type: String,
        required: true,
      },
      pocketedBalls: {
        type: Number,
        required: true,
      },
      wonGames: {
        type: Number,
        required: true,
      },
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model('Game', gameSchema, 'games')
