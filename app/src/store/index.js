import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { typeGameReducer } from './reducers/typeGameReducer'
import { playerReducer } from './reducers/playerReducer'
import { gameReducer } from './reducers/gameReducer'
import { tableReducer } from './reducers/tableReducer'

const rootReducer = combineReducers({
  typeGame: typeGameReducer,
  player: playerReducer,
  game: gameReducer,
  table: tableReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
