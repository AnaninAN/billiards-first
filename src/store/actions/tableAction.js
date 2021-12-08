import { ADD_TABLE, EDIT_TABLE, LOAD_TABLES, REMOVE_TABLE } from '../types'

import { DATA_TABLE } from '../../data'

export const loadTables = () => {
  return {
    type: LOAD_TABLES,
    payload: DATA_TABLE,
  }
}

export const addTable = (table) => {
  table.id = Date.now().toString()
  table.active = false
  return {
    type: ADD_TABLE,
    payload: table,
  }
}

export const removeTable = (table) => {
  return {
    type: REMOVE_TABLE,
    payload: table.id,
  }
}

export const editTable = (table) => {
  return {
    type: EDIT_TABLE,
    payload: table,
  }
}
