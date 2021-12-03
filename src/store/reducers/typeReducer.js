import { ADD_GAME_TYPE, LOAD_GAME_TYPES } from '../types'

const initialState = {
  gameTypes: [],
  loading: true,
}

const handlers = {
  [LOAD_GAME_TYPES]: (state, { payload }) => ({
    ...state,
    gameTypes: payload,
    loading: false,
  }),
  [ADD_GAME_TYPE]: (state, { payload }) => ({
    ...state,
    gameTypes: [{ ...payload }, ...state.gameTypes],
  }),
  DEFAULT: (state) => state,
}

export const typeReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
