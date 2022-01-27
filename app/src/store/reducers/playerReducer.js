import { ADD_PLAYER, EDIT_PLAYER, LOAD_PLAYERS, DELETE_PLAYER } from '../types'

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
  [DELETE_PLAYER]: (state, { payload }) => ({
    ...state,
    players: state.players.filter((player) => player.id !== payload),
  }),
  [EDIT_PLAYER]: (state, { payload }) => {
    const index = state.players.findIndex(({ id }) => id === payload.id)
    const newPlayers = [
      ...state.players.slice(0, index),
      payload,
      ...state.players.slice(index + 1),
    ]

    return {
      ...state,
      players: newPlayers,
    }
  },
  DEFAULT: (state) => state,
}

export const playerReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
