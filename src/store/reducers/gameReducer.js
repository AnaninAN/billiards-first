import { ADD_GAME, CHANGE_GAME, LOAD_GAMES } from '../types'

const initialState = {
  allGames: [],
  gamesCurrent: [],
  gamesComplited: [],
  loading: true,
}

const handlers = {
  [LOAD_GAMES]: (state, { payload }) => ({
    ...state,
    allGames: payload,
    gamesCurrent: payload.filter((game) => game.active),
    gamesComplited: payload.filter((game) => !game.active),
    loading: false,
  }),
  [CHANGE_GAME]: (state, { payload }) => {
    const index = state.allGames.findIndex((game) => game.id === payload.id)
    const game = state.allGames[index]
    const newGame = { ...game, ...payload }
    const newAllGames = [
      ...state.allGames.slice(0, index),
      newGame,
      ...state.allGames.slice(index + 1),
    ]

    return {
      ...state,
      allGames: newAllGames,
      gamesCurrent: newAllGames.filter((game) => game.active),
      gamesComplited: newAllGames.filter((game) => !game.active),
    }
  },
  [ADD_GAME]: (state, { payload }) => {
    const newAllGames = [{ ...payload }, ...state.allGames]

    return {
      ...state,
      allGames: newAllGames,
      gamesCurrent: newAllGames.filter((game) => game.active),
      gamesComplited: newAllGames.filter((game) => !game.active),
    }
  },
  DEFAULT: (state) => state,
}

export const gameReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
