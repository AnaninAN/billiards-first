import {
  ADD_TYPE_GAME,
  EDIT_TYPE_GAME,
  LOAD_TYPES_GAME,
  DELETE_TYPE_GAME,
} from '../types'

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
  [DELETE_TYPE_GAME]: (state, { payload }) => ({
    ...state,
    typesGame: state.typesGame.filter((type) => type.id !== payload),
  }),
  [EDIT_TYPE_GAME]: (state, { payload }) => {
    const index = state.typesGame.findIndex(({ id }) => id === payload.id)
    const newTypesGame = [
      ...state.typesGame.slice(0, index),
      payload,
      ...state.typesGame.slice(index + 1),
    ]

    return {
      ...state,
      typesGame: newTypesGame,
    }
  },
  DEFAULT: (state) => state,
}

export const typeGameReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
