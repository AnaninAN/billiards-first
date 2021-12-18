import {
  ADD_TYPE_GAME,
  EDIT_TYPE_GAME,
  LOAD_TYPES_GAME,
  REMOVE_TYPE_GAME,
} from '../types'

import { MongoDB, socket } from '../../services/MongoDB'

export const loadTypesGame = () => async (dispatch) => {
  const types = await MongoDB.get('Types')

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
  socket.on('remove typeGame', (id) => {
    dispatch({
      type: REMOVE_TYPE_GAME,
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

export const addTypeGame = async (type) => async () => {
  type.id = await MongoDB.post('Types', type)

  dispatch({
    type: ADD_TYPE_GAME,
    payload: type,
  })

  socket.emit('add typeGame', type)
}

export const removeTypeGame = (type) => async () => {
  await MongoDB.remove('Types', type.id)

  dispatch({
    type: REMOVE_TYPE_GAME,
    payload: id,
  })

  socket.emit('remove typeGame', type.id)
}

export const editTypeGame = (type) => async () => {
  await MongoDB.patch('Types', type.id, type)

  dispatch({
    type: EDIT_TYPE_GAME,
    payload: type,
  })

  socket.emit('edit typeGame', type)
}
