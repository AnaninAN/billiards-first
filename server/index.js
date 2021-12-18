const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config')
const port = process.env.PORT || config.port
const cors = require('cors')

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err))

const {
  routerType,
  routerTable,
  routerPlayer,
  routerGame,
} = require('./routes')

app.use(bodyParser.json())
app.use(cors())

app.use('/types', routerType)
app.use('/tables', routerTable)
app.use('/players', routerPlayer)
app.use('/games', routerGame)

io.on('connection', (socket) => {
  console.log(`a user connected ${socket.id}`)

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  //table
  socket.on('add table', (table) => {
    socket.broadcast.emit('add table', table)
    socket.emit('add table', table)
  })

  socket.on('remove table', (id) => {
    socket.broadcast.emit('remove table', id)
    socket.emit('remove table', id)
  })

  socket.on('edit table', (table) => {
    socket.broadcast.emit('edit table', table)
    socket.emit('edit table', table)
  })
  //player
  socket.on('add player', (player) => {
    socket.broadcast.emit('add player', player)
    socket.emit('add player', player)
  })

  socket.on('remove player', (id) => {
    socket.broadcast.emit('remove player', id)
    socket.emit('remove player', id)
  })

  socket.on('edit player', (player) => {
    socket.broadcast.emit('edit player', player)
    socket.emit('edit player', player)
  })
  //type
  socket.on('add typeGame', (type) => {
    socket.broadcast.emit('add typeGame', type)
    socket.emit('add typeGame', type)
  })

  socket.on('remove typeGame', (id) => {
    socket.broadcast.emit('remove typeGame', id)
    socket.emit('remove typeGame', id)
  })

  socket.on('edit typeGame', (type) => {
    socket.broadcast.emit('edit typeGame', type)
    socket.emit('edit typeGame', type)
  })
  //game
  socket.on('add Game', (game) => {
    socket.broadcast.emit('add Game', game)
    socket.emit('add Game', game)
  })

  socket.on('remove Game', (id) => {
    socket.broadcast.emit('remove Game', id)
    socket.emit('remove Game', id)
  })

  socket.on('change Game', (game) => {
    socket.broadcast.emit('change Game', game)
    socket.emit('change Game', game)
  })
})

server.listen(port, () => {
  console.log(`Server has been started on port ${config.port}`)
})
