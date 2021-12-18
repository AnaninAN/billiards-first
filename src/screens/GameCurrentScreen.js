import React, { useLayoutEffect, useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Icon, Modal, Spinner } from '@ui-kitten/components'
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

const LoadingIndicator = (props) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size="small" />
  </View>
)

export const GameCurrentScreen = ({
  route,
  navigation: { setOptions, goBack },
}) => {
  const dispatch = useDispatch()

  const tableGame = useRef()
  const pressButton = useRef()
  const [modal, setModal] = useState(true)
  const [disable, setDisable] = useState(false)
  const { idGame } = route.params
  const game = useSelector((state) =>
    state.game.gamesCurrent.find((game) => game.id === idGame)
  )

  useLayoutEffect(() => {
    tableGame.current = game.table
    setOptions({
      title: `${game.table.name} online`,
    })
  }, [])

  const onChangeGame = async (oper) => {
    const change = { ...game, oper }
    pressButton.current = oper
    setDisable(true)
    await dispatch(changeGame(change))
    setTimeout(() => {
      pressButton.current = ''
      setDisable(false)
    }, 1000)
  }

  const endGame = (table, player1, player2) => {
    dispatch(editTable(table))
    dispatch(editPlayer(player1))
    dispatch(editPlayer(player2))
  }

  const games = useSelector((state) => state.game.allGames)

  if (!game) {
    let wonPlayer
    //Освобождение стола
    const table = JSON.parse(JSON.stringify(tableGame.current))
    table.active = false

    const gameFinish = games.find(({ id }) => id === idGame)
    //Победитель игры
    if (gameFinish.player1.wonGames > gameFinish.player2.wonGames) {
      wonPlayer = MyFunc.surnameNP(gameFinish.player1)
    } else {
      wonPlayer = MyFunc.surnameNP(gameFinish.player2)
    }
    //Освобождение игроков
    const { player1, player2 } = JSON.parse(JSON.stringify(gameFinish))
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
          Выйграл {wonPlayer}!
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
          accessoryLeft={
            pressButton.current === '+p1' ? LoadingIndicator : PlusIcon
          }
          onPress={() => onChangeGame('+p1')}
          disabled={disable}
        />
        <Button
          style={styles.buttons}
          size="giant"
          status="primary"
          accessoryLeft={
            pressButton.current === '+p2' ? LoadingIndicator : PlusIcon
          }
          onPress={() => onChangeGame('+p2')}
          disabled={disable}
        />
      </View>
      <View style={styles.wrapButtons}>
        <Button
          style={styles.buttons}
          size="giant"
          status="danger"
          accessoryLeft={
            pressButton.current === '-p1' ? LoadingIndicator : MinusIcon
          }
          onPress={() => onChangeGame('-p1')}
          disabled={disable}
        />
        <Button
          style={styles.buttons}
          size="giant"
          status="danger"
          accessoryLeft={
            pressButton.current === '-p2' ? LoadingIndicator : MinusIcon
          }
          onPress={() => onChangeGame('-p2')}
          disabled={disable}
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
