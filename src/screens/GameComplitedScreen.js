import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import { AppTextBold } from '../components/ui/AppTextBold'
import { AppText } from '../components/ui/AppText'
import { Scoreboard } from '../components/Scoreboard'

import { MyFunc } from '../app_func'

export const GameComplitedScreen = ({ route, navigation: { setOptions } }) => {
  const { idGame } = route.params
  const game = useSelector((state) =>
    state.game.gamesComplited.find((game) => game.id === idGame)
  )

  useLayoutEffect(() => {
    setOptions({
      title: `${game.table} offline`,
    })
  }, [])

  return (
    <View style={styles.wrap}>
      <AppTextBold style={{ textAlign: 'center' }} category="h4">
        {game.name}
      </AppTextBold>
      <View style={styles.wrapPlayers}>
        <AppText category="h5">{MyFunc.surnameNP(game.player1)}</AppText>
        <AppText category="h5">{MyFunc.surnameNP(game.player2)}</AppText>
      </View>
      <Scoreboard
        games={game.games}
        balls={game.balls}
        player1={game.player1}
        player2={game.player2}
        history={game.history}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    padding: 15,
  },
  wrapPlayers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
})
