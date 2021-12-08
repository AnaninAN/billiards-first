import moment from 'moment'

import { ADD_GAME, CHANGE_GAME, LOAD_GAMES } from '../types'

import { DATA_GAME } from '../../data'
import { MyFunc } from '../../app_func'

export const loadGames = () => {
  return {
    type: LOAD_GAMES,
    payload: DATA_GAME,
  }
}

export const changeGame = (change) => {
  if (change.oper) {
    payload = MyFunc.changeGame(change)
  } else {
    payload = change
  }
  return {
    type: CHANGE_GAME,
    payload,
  }
}

export const addGame = (game) => {
  game.id = Date.now().toString()
  game.date = moment(new Date()).format('DD.MM.YYYY')
  game.active = true
  game.history = []
  return {
    type: ADD_GAME,
    payload: game,
  }
}
