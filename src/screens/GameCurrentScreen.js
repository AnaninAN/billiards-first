import React, { useLayoutEffect, useRef, useState } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Button, Icon, Modal } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'

import { AppTextBold } from '../components/ui/AppTextBold'
import { AppText } from '../components/ui/AppText'
import { Scoreboard } from '../components/Scoreboard'
import { changeGame } from '../store/actions/gameAction'
import { editTable } from '../store/actions/tableAction'
import { editPlayer } from '../store/actions/playerAction'

import { MyFunc } from '../app_func'

const PlusIcon = (props) => <Icon {...props} name="plus" />

const MinusIcon = (props) => <Icon {...props} name="minus" />

export const GameCurrentScreen = ({
  route,
  navigation: { setOptions, goBack },
}) => {
  const dispatch = useDispatch()
  const tableGame = useRef()
  const [modal, setModal] = useState(true)
  const { idGame } = route.params
  const game = useSelector((state) =>
    state.game.gamesCurrent.find((game) => game.id === idGame)
  )

  useLayoutEffect(() => {
    tableGame.current = game.table
    setOptions({
      title: `${game.table} online`,
    })
  }, [])

  const onChangeGame = (oper) => {
    const change = { ...game, oper }
    dispatch(changeGame(change))
  }

  const endGame = (table, player1, player2) => {
    dispatch(editTable(table))
    dispatch(editPlayer(player1))
    dispatch(editPlayer(player2))
  }

  const games = useSelector((state) => state.game.allGames)
  const tables = useSelector((state) => state.table.tables)

  if (!game) {
    const table = JSON.parse(
      JSON.stringify(tables.find(({ name }) => name === tableGame.current))
    )
    table.active = false

    const { player1, player2 } = JSON.parse(
      JSON.stringify(games.find(({ id }) => id === idGame))
    )
    delete player1.wonGames
    delete player1.pocketedBalls
    delete player2.wonGames
    delete player2.pocketedBalls
    player1.active = false
    player2.active = false

    return (
      <Modal
        visible={modal}
        style={styles.modal}
        backdropStyle={styles.backdrop}
      >
        <Button
          onPress={() => {
            goBack()
            setModal(false)
            endGame(table, player1, player2)
          }}
        >
          Игра окончена
        </Button>
      </Modal>
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
  modal: {
    width: '95%',
    flex: 1,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
})
