import './App.css'

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MainScreen } from '../../screens/MainScreen'

import { _URL } from '../../config'

export const App = () => {
  const params = useParams()

  const [game, setGame] = useState({})

  useEffect(() => {
    subscribe()
  }, [])

  const subscribe = async () => {
    const eventSourceRestart = new EventSource(
      `${_URL}/games/${params.scoreboard}/restart/${params.id}`
    )
    const eventSource = new EventSource(
      `${_URL}/games/${params.scoreboard}/${params.id}`
    )

    eventSource.onmessage = function (event) {
      const data = JSON.parse(event.data)
      setGame(data)
    }
  }

  if (!Object.keys(game).length) {
    return null
  }

  return <MainScreen game={game} />
}
