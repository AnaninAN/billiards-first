import { ADD_TABLE, LOAD_TABLES } from '../types'

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
  DEFAULT: (state) => state,
}

export const tableReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
