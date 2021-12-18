import { ADD_TABLE, EDIT_TABLE, LOAD_TABLES, REMOVE_TABLE } from '../types'

import { MongoDB, socket } from '../../services/MongoDB'

export const loadTables = () => async (dispatch) => {
  const tables = await MongoDB.get('Tables')

  dispatch({
    type: LOAD_TABLES,
    payload: tables,
  })

  //Добавление стола
  socket.on('add table', (table) => {
    dispatch({
      type: ADD_TABLE,
      payload: table,
    })
  })

  //Удаление стола
  socket.on('remove table', (id) => {
    dispatch({
      type: REMOVE_TABLE,
      payload: id,
    })
  })

  //Изменение стола
  socket.on('edit table', (table) => {
    dispatch({
      type: EDIT_TABLE,
      payload: table,
    })
  })
}

export const addTable = (table) => async (dispatch) => {
  table.active = false
  table.id = await MongoDB.post('Tables', table)

  dispatch({
    type: ADD_TABLE,
    payload: table,
  })

  socket.emit('add table', table)
}

export const removeTable = (table) => async (dispatch) => {
  await MongoDB.remove('Tables', table.id)

  dispatch({
    type: REMOVE_TABLE,
    payload: table.id,
  })

  socket.emit('remove table', table.id)
}

export const editTable = (table) => async (dispatch) => {
  await MongoDB.patch('Tables', table.id, table)

  dispatch({
    type: EDIT_TABLE,
    payload: table,
  })

  socket.emit('edit table', table)
}
