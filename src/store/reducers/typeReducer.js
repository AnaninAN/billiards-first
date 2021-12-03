import { ADD_TYPE_GAME, LOAD_TYPES_GAME, REMOVE_TYPE_GAME } from '../types'

const initialState = {
  typesGame: [],
  loading: true,
}

const handlers = {
  [LOAD_TYPES_GAME]: (state, { payload }) => ({
    ...state,
    typesGame: payload,
    loading: false,
  }),
  [ADD_TYPE_GAME]: (state, { payload }) => ({
    ...state,
    typesGame: [{ ...payload }, ...state.typesGame],
  }),
  [REMOVE_TYPE_GAME]: (state, { payload }) => ({
    ...state,
    typesGame: state.typesGame.filter((type) => type.id !== payload),
  }),
  DEFAULT: (state) => state,
}

export const typeReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
