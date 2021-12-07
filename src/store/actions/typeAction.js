import {
  ADD_TYPE_GAME,
  EDIT_TYPE_GAME,
  LOAD_TYPES_GAME,
  REMOVE_TYPE_GAME,
} from '../types'

import { DATA_TYPE } from '../../data'

export const loadTypesGame = () => {
  return {
    type: LOAD_TYPES_GAME,
    payload: DATA_TYPE,
  }
}

export const addTypeGame = (type) => {
  type.id = Date.now().toString()
  return {
    type: ADD_TYPE_GAME,
    payload: type,
  }
}

export const removeTypeGame = (type) => {
  return {
    type: REMOVE_TYPE_GAME,
    payload: type.id,
  }
}

export const editTypeGame = (type) => {
  return {
    type: EDIT_TYPE_GAME,
    payload: type,
  }
}
