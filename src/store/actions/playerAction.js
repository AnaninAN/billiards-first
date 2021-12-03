import { ADD_PLAYER, LOAD_PLAYERS, REMOVE_PLAYER } from '../types'

import { DATA_PLAYER } from '../../data'

export const loadPlayers = () => {
  return {
    type: LOAD_PLAYERS,
    payload: DATA_PLAYER,
  }
}

export const addPlayer = (player) => {
  player.id = Date.now().toString()
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
