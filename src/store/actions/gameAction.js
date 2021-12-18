import moment from 'moment'

import { ADD_GAME, CHANGE_GAME, LOAD_GAMES, REMOVE_GAME } from '../types'

import { MongoDB, socket } from '../../services/MongoDB'
import { MyFunc } from '../../app_func'

export const loadGames = () => async (dispatch) => {
  const games = await MongoDB.get('Games')

  dispatch({
    type: LOAD_GAMES,
    payload: games,
  })

  //Добавление игры
  socket.on('add Game', (game) => {
    dispatch({
      type: ADD_GAME,
      payload: game,
    })
  })

  //Удаление игры
  socket.on('remove Game', (id) => {
    dispatch({
      type: REMOVE_GAME,
      payload: id,
    })
  })

  //Изменение игры
  socket.on('change Game', (game) => {
    dispatch({
      type: CHANGE_GAME,
      payload: game,
    })
  })
}

export const changeGame = (game) => async (dispatch) => {
  let payload
  if (game.oper) {
    payload = MyFunc.changeGame(game)
  } else {
    payload = game
  }
  await MongoDB.patch('Games', game.id, payload)

  dispatch({
    type: CHANGE_GAME,
    payload,
  })

  socket.emit('change Game', payload)
}

export const addGame = (game) => async (dispatch) => {
  game.date = moment(new Date()).format('DD.MM.YYYY')
  game.active = true
  game.history = []
  game.id = await MongoDB.post('Games', game)

  // dispatch({
  //   type: ADD_GAME,
  //   payload: game,
  // })

  socket.emit('add Game', game)
}

export const removeGame = (game) => async (dispatch) => {
  await MongoDB.remove('Games', game.id)

  dispatch({
    type: REMOVE_GAME,
    payload: game.id,
  })

  socket.emit('remove Game', game.id)
}
