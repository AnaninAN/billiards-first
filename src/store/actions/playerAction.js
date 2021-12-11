import { ADD_PLAYER, EDIT_PLAYER, LOAD_PLAYERS, REMOVE_PLAYER } from '../types'

import { MongoDB } from '../../services/MongoDB'

export const loadPlayers = () => async (dispatch) => {
  const players = await MongoDB.get('Players')

  dispatch({
    type: LOAD_PLAYERS,
    payload: players,
  })
}

export const addPlayer = (player) => async (dispatch) => {
  player.active = false
  player.id = await MongoDB.post('Players', player)

  dispatch({
    type: ADD_PLAYER,
    payload: player,
  })
}

export const removePlayer = (player) => async (dispatch) => {
  await MongoDB.remove('Players', player.id)

  dispatch({
    type: REMOVE_PLAYER,
    payload: player.id,
  })
}

export const editPlayer = (player) => async (dispatch) => {
  await MongoDB.patch('Players', player.id, player)

  dispatch({
    type: EDIT_PLAYER,
    payload: player,
  })
}
