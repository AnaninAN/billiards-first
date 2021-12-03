import { ADD_GAME_TYPE, LOAD_GAME_TYPES } from '../types'

import { DATA_TYPE } from '../../data'

export const loadGameTypes = () => {
  return {
    type: LOAD_GAME_TYPES,
    payload: DATA_TYPE,
  }
}

export const addGameType = (type) => {
  type.id = Date.now().toString()
  return {
    type: ADD_GAME_TYPE,
    payload: type,
  }
}
