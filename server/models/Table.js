const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Описывается структура коллекции table
const tableSchema = new Schema(
  {
    name: {
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

module.exports = mongoose.model('Table', tableSchema, 'tables')
