import './App.css'

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { MyFunc } from '../../app_func'

import { _URL } from '../../config'

export const App = () => {
  const params = useParams()

  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')
  const [pocketedBalls1, setPocketedBalls1] = useState('')
  const [pocketedBalls2, setPocketedBalls2] = useState('')
  const [wonGames1, setWonGames1] = useState('')
  const [wonGames2, setWonGames2] = useState('')
  const [balls, setBalls] = useState()
  const [games, setGames] = useState()
  const [history, setHistory] = useState([])
  const [table, setTable] = useState('')

  useEffect(() => {
    subscribe()
  })

  const subscribe = async () => {
    try {
      const { data } = await axios.get(
        `${_URL}/games/${params.scoreboard}/${params.id}`
      )

      setName1(MyFunc.surnameNP(data.player1))
      setName2(MyFunc.surnameNP(data.player2))
      setPocketedBalls1(data.player1.pocketedBalls)
      setPocketedBalls2(data.player2.pocketedBalls)
      setWonGames1(data.player1.wonGames)
      setWonGames2(data.player2.wonGames)
      setBalls(data.balls)
      setGames(data.games)
      setHistory(data.history)
      setTable(data.table.name)

      await subscribe()
    } catch (e) {
      setTimeout(() => {
        subscribe()
      }, 5000)
    }
  }

  return (
    <div className="container">
      <div className="table">{table}</div>
      <div className="scoreboard">
        <div className="cell player1">{name1}</div>
        <div className="cell ball-first">
          {balls === 8 ? pocketedBalls1 : wonGames1}
        </div>
        <div className="cell ball-second">
          {balls === 8 ? wonGames1 : pocketedBalls1}
        </div>
        <div className="cell game"> ({balls === 8 ? games : balls})</div>
        <div className="cell ball-second">
          {balls === 8 ? wonGames2 : pocketedBalls2}
        </div>
        <div className="cell ball-first">
          {balls === 8 ? pocketedBalls2 : wonGames2}
        </div>
        <div className="cell player2">{name2}</div>
      </div>
      <div className="history">{history.join(', ')}</div>
    </div>
  )
}
