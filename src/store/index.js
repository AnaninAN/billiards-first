import { createStore, combineReducers } from 'redux'

import { typeReducer } from './reducers/typeReducer'
import { playerReducer } from './reducers/playerReducer'

const rootReducer = combineReducers({
  type: typeReducer,
  player: playerReducer,
})

export default createStore(rootReducer)
