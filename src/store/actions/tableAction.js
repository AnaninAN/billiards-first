import { ADD_TABLE, LOAD_TABLES } from '../types'

import { DATA_TABLE } from '../../data'

export const loadTables = () => {
  return {
    type: LOAD_TABLES,
    payload: DATA_TABLE,
  }
}

export const addTable = (table) => {
  table.id = Date.now().toString()
  return {
    type: ADD_TABLE,
    payload: table,
  }
}
