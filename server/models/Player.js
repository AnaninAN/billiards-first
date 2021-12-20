const mongoose = require('mongoose')

//Описывается структура коллекции player
const Player = new mongoose.Schema(
  {
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
    active: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model('Player', Player, 'players')
