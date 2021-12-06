import { CHANGE_GAME, LOAD_GAMES } from '../types'

import { DATA_GAME } from '../../data'
import { MyFunc } from '../../app_func'

export const loadGames = () => {
  return {
    type: LOAD_GAMES,
    payload: DATA_GAME,
  }
}

export const changeGame = (change) => {
  return {
    type: CHANGE_GAME,
    payload: MyFunc.changeGame(change),
  }
}
