import { createStore, combineReducers } from 'redux'

import { typeReducer } from './reducers/typeReducer'

const rootReducer = combineReducers({
  type: typeReducer,
})

export default createStore(rootReducer)
