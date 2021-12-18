import './App.scss'

import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'

import { MyFunc } from '../../app_func'
import { Button } from 'react-native-paper'

const socket = io('http://192.168.43.135:9001')

export const App = () => {
  const [name1, setName1] = useState('Player 1')
  const [name2, setName2] = useState('Player 2')
  const [pocketedBalls1, setPocketedBalls1] = useState('')
  const [pocketedBalls2, setPocketedBalls2] = useState('')
  const [wonGames1, setWonGames1] = useState('')
  const [wonGames2, setWonGames2] = useState('')
  const [balls, setBalls] = useState()
  const [games, setGames] = useState()

  useEffect(() => {
    fetch('http://192.168.43.135:9001/Games', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((responce) => responce.json())
      .then((data) => {
        const game = data.find(({ active }) => active)
        setName1(MyFunc.surnameNP(game.player1))
        setName2(MyFunc.surnameNP(game.player2))
        setPocketedBalls1(game.player1.pocketedBalls)
        setPocketedBalls2(game.player2.pocketedBalls)
        setWonGames1(game.player1.wonGames)
        setWonGames2(game.player2.wonGames)
        setBalls(game.balls)
        setGames(game.games)
      })
  }, [])

  socket.on('add Game', (game) => {
    setName1(MyFunc.surnameNP(game.player1))
    setName2(MyFunc.surnameNP(game.player2))
    setPocketedBalls1(game.player1.pocketedBalls)
    setPocketedBalls2(game.player2.pocketedBalls)
    setWonGames1(game.player1.wonGames)
    setWonGames2(game.player2.wonGames)
    setBalls(game.balls)
    setGames(game.games)
  })

  socket.on('change Game', (game) => {
    setPocketedBalls1(game.player1.pocketedBalls)
    setPocketedBalls2(game.player2.pocketedBalls)
    setWonGames1(game.player1.wonGames)
    setWonGames2(game.player2.wonGames)
  })

  return (
    <div className="container">
      <div className="cell player1">{name1}</div>
      <div className="cell ball">
        {balls === 8 ? pocketedBalls1 : wonGames1}
      </div>
      <div className="cell ball">
        {balls === 8 ? wonGames1 : pocketedBalls1}
      </div>
      <div className="cell game"> ({balls === 8 ? games : balls})</div>
      <div className="cell ball">
        {balls === 8 ? wonGames2 : pocketedBalls2}
      </div>
      <div className="cell ball">
        {balls === 8 ? pocketedBalls2 : wonGames2}
      </div>
      <div className="cell player2">{name2}</div>
    </div>
  )
}
