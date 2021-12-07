import { createStore, combineReducers } from 'redux'

import { typeReducer } from './reducers/typeReducer'
import { playerReducer } from './reducers/playerReducer'
import { gameReducer } from './reducers/gameReducer'
import { tableReducer } from './reducers/tableReducer'

const rootReducer = combineReducers({
  type: typeReducer,
  player: playerReducer,
  game: gameReducer,
  table: tableReducer,
})

export default createStore(rootReducer)
