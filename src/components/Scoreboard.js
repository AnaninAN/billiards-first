import React from 'react'
import { View, StyleSheet } from 'react-native'

import { default as colors } from '../theme_eva.json'
import { AppCard } from './ui/AppCard'

import { MyFunc } from '../app_func'

export const Scoreboard = ({ games, balls, player1, player2, history }) => {
  return (
    <View>
      <View style={styles.container}>
        <AppCard style={styles.card1} color="#a0a0a0" bold>
          {balls === 8 ? player1.pocketedBalls : 0}
        </AppCard>
        <AppCard style={styles.card2} color={colors['color-warning-500']} bold>
          {balls === 8 ? player1.wonGames : player1.pocketedBalls}
        </AppCard>
        <AppCard style={styles.card3} color={colors['color-success-900']} bold>
          ({balls === 8 ? games : balls})
        </AppCard>
        <AppCard style={styles.card2} color={colors['color-warning-500']} bold>
          {balls === 8 ? player2.wonGames : player2.pocketedBalls}
        </AppCard>
        <AppCard style={styles.card1} color="#a0a0a0" bold>
          {balls === 8 ? player2.pocketedBalls : 0}
        </AppCard>
      </View>
      <AppCard style={styles.card4} color={colors['color-info-500']}>
        {MyFunc.gameHistory(history)}
      </AppCard>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '94%',
    height: 80,
  },
  card1: {
    width: '18%',
    marginHorizontal: 2,
  },
  card2: {
    width: '19%',
    marginHorizontal: 2,
  },
  card3: {
    width: '26%',
    marginHorizontal: 2,
  },
  card4: {
    height: 30,
    marginHorizontal: 2,
  },
  text: {
    textAlign: 'center',
  },
})