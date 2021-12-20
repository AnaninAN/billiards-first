import { ADD_PLAYER, EDIT_PLAYER, LOAD_PLAYERS, DELETE_PLAYER } from '../types'

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
  socket.on('delete player', (id) => {
    dispatch({
      type: DELETE_PLAYER,
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
  player.id = await MongoDB.create('Players', player)

  dispatch({
    type: ADD_PLAYER,
    payload: player,
  })

  socket.emit('add player', player)
}

export const deletePlayer = (player) => async (dispatch) => {
  await MongoDB.delete('Players', player.id)

  dispatch({
    type: DELETE_PLAYER,
    payload: player.id,
  })

  socket.emit('delete player', player.id)
}

export const editPlayer = (player) => async (dispatch) => {
  await MongoDB.update('Players', player.id, player)

  dispatch({
    type: EDIT_PLAYER,
    payload: player,
  })

  socket.emit('edit player', player)
}
