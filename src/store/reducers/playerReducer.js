import { ADD_PLAYER, LOAD_PLAYERS, REMOVE_PLAYER } from '../types'

const initialState = {
  players: [],
  loading: true,
}

const handlers = {
  [LOAD_PLAYERS]: (state, { payload }) => ({
    ...state,
    players: payload,
    loading: false,
  }),
  [ADD_PLAYER]: (state, { payload }) => ({
    ...state,
    players: [{ ...payload }, ...state.players],
  }),
  [REMOVE_PLAYER]: (state, { payload }) => ({
    ...state,
    players: state.players.filter((player) => player.id !== payload),
  }),
  DEFAULT: (state) => state,
}

export const playerReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
