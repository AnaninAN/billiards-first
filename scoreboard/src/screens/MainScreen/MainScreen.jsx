import './MainScreen.css'

import React from 'react'

import { MyFunc } from '../../app_func'

export const MainScreen = ({ game }) => {
  const { table, player1, player2, games, balls, history } = game

  return (
    <div className="container">
      <div className="table">{table.name}</div>
      <div className="scoreboard">
        <div className="cell player1">{MyFunc.surnameNP(player1)}</div>
        <div className="cell ball-first">
          {balls === 8 ? player1.pocketedBalls : player1.wonGames}
        </div>
        <div className="cell ball-second">
          {balls === 8 ? player1.wonGames : player1.pocketedBalls}
        </div>
        <div className="cell game">({balls === 8 ? games : balls})</div>
        <div className="cell ball-second">
          {balls === 8 ? player2.wonGames : player2.pocketedBalls}
        </div>
        <div className="cell ball-first">
          {balls === 8 ? player2.pocketedBalls : player2.wonGames}
        </div>
        <div className="cell player2">{MyFunc.surnameNP(player2)}</div>
      </div>
      <div className="history">{history.join(', ')}</div>
    </div>
  )
}
