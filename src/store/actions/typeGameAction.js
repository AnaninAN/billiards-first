import {
  ADD_TYPE_GAME,
  EDIT_TYPE_GAME,
  LOAD_TYPES_GAME,
  DELETE_TYPE_GAME,
} from '../types'

import { MongoDB, socket } from '../../services/MongoDB'

export const loadTypesGame = () => async (dispatch) => {
  const types = await MongoDB.get('Type-Games')

  dispatch({
    type: LOAD_TYPES_GAME,
    payload: types,
  })

  //Добавление вида игры
  socket.on('add typeGame', (type) => {
    dispatch({
      type: ADD_TYPE_GAME,
      payload: type,
    })
  })

  //Удаление вида игры
  socket.on('delete typeGame', (id) => {
    dispatch({
      type: DELETE_TYPE_GAME,
      payload: id,
    })
  })

  //Изменение вида игры
  socket.on('edit typeGame', (type) => {
    dispatch({
      type: EDIT_TYPE_GAME,
      payload: type,
    })
  })
}

export const addTypeGame = (type) => async (dispatch) => {
  type.id = await MongoDB.create('Type-Games', type)

  dispatch({
    type: ADD_TYPE_GAME,
    payload: type,
  })

  socket.emit('add typeGame', type)
}

export const deleteTypeGame = (type) => async (dispatch) => {
  await MongoDB.delete('Type-Games', type.id)

  dispatch({
    type: DELETE_TYPE_GAME,
    payload: type.id,
  })

  socket.emit('delete typeGame', type.id)
}

export const editTypeGame = (type) => async (dispatch) => {
  await MongoDB.update('Type-Games', type.id, type)

  dispatch({
    type: EDIT_TYPE_GAME,
    payload: type,
  })

  socket.emit('edit typeGame', type)
}
