import { ADD_PLAYER, EDIT_PLAYER, LOAD_PLAYERS, REMOVE_PLAYER } from '../types'

import { MongoDB, socket } from '../../services/MongoDB'

export const loadPlayers = () => async (dispatch) => {
  const players = await MongoDB.get('Players')

  dispatch({
    type: LOAD_PLAYERS,
    payload: players,
  })

  //Добавление игрока
  socket.on('add player', (player) => {
    dispatch({
      type: ADD_PLAYER,
      payload: player,
    })
  })

  //Удаление игрока
  socket.on('remove player', (id) => {
    dispatch({
      type: REMOVE_PLAYER,
      payload: id,
    })
  })

  //Изменение игрока
  socket.on('edit player', (player) => {
    dispatch({
      type: EDIT_PLAYER,
      payload: player,
    })
  })
}

export const addPlayer = (player) => async (dispatch) => {
  player.active = false
  player.id = await MongoDB.post('Players', player)

  dispatch({
    type: ADD_PLAYER,
    payload: player,
  })

  socket.emit('add player', player)
}

export const removePlayer = (player) => async (dispatch) => {
  await MongoDB.remove('Players', player.id)

  dispatch({
    type: REMOVE_PLAYER,
    payload: player.id,
  })

  socket.emit('remove player', player.id)
}

export const editPlayer = (player) => async (dispatch) => {
  await MongoDB.patch('Players', player.id, player)

  dispatch({
    type: EDIT_PLAYER,
    payload: player,
  })

  socket.emit('edit player', player)
}
