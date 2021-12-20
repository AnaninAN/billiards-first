const mongoose = require('mongoose')

//Описывается структура коллекции table
const Table = new mongoose.Schema(
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

module.exports = mongoose.model('Table', Table, 'tables')
