const mongoose = require('mongoose')

//Описывается структура коллекции type
const TypeGame = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
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
  },
  { versionKey: false }
)

module.exports = mongoose.model('TypeGame', TypeGame, 'type-games')
