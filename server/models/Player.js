const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Описывается структура коллекции player
const playerSchema = new Schema(
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

module.exports = mongoose.model('Player', playerSchema, 'players')
