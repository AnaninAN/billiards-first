import {
  ADD_TYPE_GAME,
  EDIT_TYPE_GAME,
  LOAD_TYPES_GAME,
  REMOVE_TYPE_GAME,
} from '../types'

import { MongoDB } from '../../services/MongoDB'

export const loadTypesGame = () => async (dispatch) => {
  const types = await MongoDB.get('Types')

  dispatch({
    type: LOAD_TYPES_GAME,
    payload: types,
  })
}

export const addTypeGame = (type) => async (dispatch) => {
  type.id = await MongoDB.post('Types', type)

  dispatch({
    type: ADD_TYPE_GAME,
    payload: type,
  })
}

export const removeTypeGame = (type) => async (dispatch) => {
  await MongoDB.remove('Types', type.id)

  dispatch({
    type: REMOVE_TYPE_GAME,
    payload: type.id,
  })
}

export const editTypeGame = (type) => async (dispatch) => {
  await MongoDB.patch('Types', type.id, type)

  dispatch({
    type: EDIT_TYPE_GAME,
    payload: type,
  })
}
