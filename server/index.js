const express = require('express')
const app = express()
const server = require('http').createServer(app)
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
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('add game', (game) => {
    console.log(game)
  })
})

server.listen(port, () => {
  console.log(`Server has been started on port ${config.port}`)
})
