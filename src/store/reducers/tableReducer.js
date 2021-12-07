import { ADD_TABLE, EDIT_TABLE, LOAD_TABLES, REMOVE_TABLE } from '../types'

const initialState = {
  tables: [],
  loading: true,
}

const handlers = {
  [LOAD_TABLES]: (state, { payload }) => ({
    ...state,
    tables: payload,
    loading: false,
  }),
  [ADD_TABLE]: (state, { payload }) => ({
    ...state,
    tables: [{ ...payload }, ...state.tables],
  }),
  [REMOVE_TABLE]: (state, { payload }) => ({
    ...state,
    tables: state.tables.filter(({ id }) => id !== payload),
  }),
  [EDIT_TABLE]: (state, { payload }) => {
    const index = state.tables.findIndex(({ id }) => id === payload.id)
    const newTables = [
      ...state.tables.slice(0, index),
      payload,
      ...state.tables.slice(index + 1),
    ]

    return {
      ...state,
      tables: newTables,
    }
  },
  DEFAULT: (state) => state,
}

export const tableReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
