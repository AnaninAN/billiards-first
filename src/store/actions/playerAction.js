import { ADD_PLAYER, EDIT_PLAYER, LOAD_PLAYERS, REMOVE_PLAYER } from '../types'

import { DATA_PLAYER } from '../../data'

export const loadPlayers = () => {
  return {
    type: LOAD_PLAYERS,
    payload: DATA_PLAYER,
  }
}

export const addPlayer = (player) => {
  player.id = Date.now().toString()
  player.active = false
  return {
    type: ADD_PLAYER,
    payload: player,
  }
}

export const removePlayer = (player) => {
  return {
    type: REMOVE_PLAYER,
    payload: player.id,
  }
}

export const editPlayer = (player) => {
  return {
    type: EDIT_PLAYER,
    payload: player,
  }
}
