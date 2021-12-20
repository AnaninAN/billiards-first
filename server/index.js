require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const PORT = process.env.PORT

const start = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('MongoDB connected'))
    server.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

const {
  typeGameRouter,
  tableRouter,
  playerRouter,
  gameRouter,
} = require('./routes')

app.use(express.json())
app.use(cors())

app.use('/api', typeGameRouter)
app.use('/api', tableRouter)
app.use('/api', playerRouter)
app.use('/api', gameRouter)

io.on('connection', (socket) => {
  console.log(`a user connected ${socket.id}`)

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  //table
  socket.on('add table', (table) => {
    socket.broadcast.emit('add table', table)
  })

  socket.on('delete table', (id) => {
    socket.broadcast.emit('delete table', id)
  })

  socket.on('edit table', (table) => {
    socket.broadcast.emit('edit table', table)
  })
  //player
  socket.on('add player', (player) => {
    socket.broadcast.emit('add player', player)
  })

  socket.on('delete player', (id) => {
    socket.broadcast.emit('delete player', id)
  })

  socket.on('edit player', (player) => {
    socket.broadcast.emit('edit player', player)
  })
  //type
  socket.on('add typeGame', (type) => {
    socket.broadcast.emit('add typeGame', type)
  })

  socket.on('delete typeGame', (id) => {
    socket.broadcast.emit('delete typeGame', id)
  })

  socket.on('edit typeGame', (type) => {
    socket.broadcast.emit('edit typeGame', type)
  })
  //game
  socket.on('add Game', (game) => {
    socket.broadcast.emit('add Game', game)
  })

  socket.on('delete Game', (id) => {
    socket.broadcast.emit('delete Game', id)
  })

  socket.on('change Game', (game) => {
    socket.broadcast.emit('change Game', game)
  })
})

start()
