import io from 'socket.io-client'

const _URL = 'http://192.168.31.226:5000'
const _API = 'api'

export const socket = io(_URL)

const _transform = (collection) => {
  if (collection === 'Type-Games') {
    return (typeGames) => ({
      id: typeGames._id,
      name: typeGames.name,
      desc: typeGames.desc,
      games: typeGames.games,
      balls: typeGames.balls,
    })
  }
  if (collection === 'Tables') {
    return (table) => ({
      id: table._id,
      name: table.name,
      active: table.active,
    })
  }
  if (collection === 'Players') {
    return (player) => ({
      id: player._id,
      name: player.name,
      surname: player.surname,
      patronymic: player.patronymic,
      active: player.active,
    })
  }
  if (collection === 'Games') {
    return (game) => ({
      id: game._id,
      name: game.name,
      games: game.games,
      balls: game.balls,
      date: game.date,
      active: game.active,
      history: game.history,
      table: game.table,
      player1: {
        id: game.player1.id,
        name: game.player1.name,
        surname: game.player1.surname,
        patronymic: game.player1.patronymic,
        pocketedBalls: game.player1.pocketedBalls,
        wonGames: game.player1.wonGames,
      },
      player2: {
        id: game.player2.id,
        name: game.player2.name,
        surname: game.player2.surname,
        patronymic: game.player2.patronymic,
        pocketedBalls: game.player2.pocketedBalls,
        wonGames: game.player2.wonGames,
      },
    })
  }
}

export class MongoDB {
  static HEADERS = { 'Content-Type': 'application/json' }

  static async get(collection) {
    try {
      const res = await request(`${_URL}/${_API}/${collection}`, 'GET')
      return res.map(_transform(collection))
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  static async create(collection, data = {}) {
    try {
      const res = await request(`${_URL}/${_API}/${collection}`, 'POST', data)
      return res
    } catch (e) {
      console.log(e)
    }
  }

  static async delete(collection, id) {
    try {
      return await request(`${_URL}/${_API}/${collection}/${id}`, 'DELETE')
    } catch (e) {
      console.log(e)
    }
  }

  static async update(collection, id, data = {}) {
    try {
      return await request(`${_URL}/${_API}/${collection}/${id}`, 'PATCH', data)
    } catch (e) {
      console.log(e)
    }
  }
}

async function request(url, method = 'GET', data) {
  const config = {
    method,
    headers: MongoDB.HEADERS,
  }

  if (method === 'POST' || method === 'PATCH') {
    config.body = JSON.stringify(data)
  }

  const response = await fetch(url, config)
  return await response.json()
}
