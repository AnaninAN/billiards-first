import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Icon } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'

import { AppTextBold } from '../components/ui/AppTextBold'
import { AppText } from '../components/ui/AppText'
import { Scoreboard } from '../components/Scoreboard'
import { changeGame } from '../store/actions/gameAction'

import { MyFunc } from '../app_func'

const PlusIcon = (props) => <Icon {...props} name="plus" />

const MinusIcon = (props) => <Icon {...props} name="minus" />

export const GameCurrentScreen = ({ route, navigation: { setOptions } }) => {
  const dispatch = useDispatch()
  const { idGame } = route.params
  const game = useSelector((state) =>
    state.game.gamesCurrent.find((game) => game.id === idGame)
  )

  useLayoutEffect(() => {
    setOptions({
      title: `${game.table} online`,
    })
  }, [])

  const onChangeGame = (oper) => {
    const change = { ...game, oper }
    dispatch(changeGame(change))
  }

  if (!game) {
    return (
      <View style={styles.wrap}>
        <AppTextBold style={{ textAlign: 'center' }} category="h4">
          Игра окончена
        </AppTextBold>
      </View>
    )
  }

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
      <View style={styles.wrapButtons}>
        <Button
          style={styles.buttons}
          size="giant"
          status="primary"
          accessoryLeft={PlusIcon}
          onPress={() => onChangeGame('+p1')}
        />
        <Button
          style={styles.buttons}
          size="giant"
          status="primary"
          accessoryLeft={PlusIcon}
          onPress={() => onChangeGame('+p2')}
        />
      </View>
      <View style={styles.wrapButtons}>
        <Button
          style={styles.buttons}
          size="giant"
          status="danger"
          accessoryLeft={MinusIcon}
          onPress={() => onChangeGame('-p1')}
        />
        <Button
          style={styles.buttons}
          size="giant"
          status="danger"
          accessoryLeft={MinusIcon}
          onPress={() => onChangeGame('-p2')}
        />
      </View>
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
  wrapButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  buttons: {
    margin: 3,
  },
})
