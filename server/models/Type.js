const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Описывается структура коллекции type
const typeSchema = new Schema(
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

module.exports = mongoose.model('Type', typeSchema, 'types')
