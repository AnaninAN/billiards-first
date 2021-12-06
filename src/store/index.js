import { createStore, combineReducers } from 'redux'

import { typeReducer } from './reducers/typeReducer'
import { playerReducer } from './reducers/playerReducer'
import { gameReducer } from './reducers/gameReducer'

const rootReducer = combineReducers({
  type: typeReducer,
  player: playerReducer,
  game: gameReducer,
})

export default createStore(rootReducer)
