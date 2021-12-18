import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { StyleSheet, FlatList, Image, View, Alert } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'

import {
  AppIonicons,
  AppMaterialCommunityIcons,
} from '../components/AppHeaderIcon'
import {
  loadGames,
  addGame,
  changeGame,
  removeGame,
} from '../store/actions/gameAction'
import { loadTypesGame } from '../store/actions/typeAction'
import { loadPlayers, editPlayer } from '../store/actions/playerAction'
import { loadTables, editTable } from '../store/actions/tableAction'
import { Game } from '../components/Game'
import { CreateGameModal } from '../components/CreateGameModal'
import { CreateTableForGameModal } from '../components/CreateTableForGameModal'
import { MyFunc } from '../app_func'

export const GamesCurrentScreen = ({
  navigation: { setOptions, toggleDrawer, navigate },
}) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [modalTable, setModalTable] = useState(false)
  const idGameForTable = useRef()

  useEffect(() => {
    dispatch(loadGames())
    dispatch(loadTypesGame())
    dispatch(loadPlayers())
    dispatch(loadTables())
  }, [dispatch])

  useLayoutEffect(() => {
    setOptions({
      title: 'Текущие игры',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppIonicons}>
          <Item title="Menu" iconName="menu" onPress={() => toggleDrawer()} />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppMaterialCommunityIcons}>
          <Item
            title="New"
            iconName="gamepad-down"
            onPress={() => setModal(true)}
          />
        </HeaderButtons>
      ),
    })
  }, [])

  const toOpenGameHandler = (game) => {
    if (game.table) {
      navigate('GameCurrentScreen', {
        idGame: game.id,
      })
    } else {
      idGameForTable.current = game.id
      setModalTable(true)
    }
  }

  const games = useSelector((state) => state.game.allGames)

  const removeHandler = (game) => {
    Alert.alert(
      'Удаление игры',
      `Удалить игру "${game.name}": ${MyFunc.surnameNP(
        game.player1
      )} VS ${MyFunc.surnameNP(game.player2)}?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => {
            dispatch(removeGame(game))
            navigate('GamesCurrentStack')
            //Освобождение стола, если назначен
            if (game.table) {
              const table = JSON.parse(JSON.stringify(game.table))
              table.active = false
              dispatch(editTable(table))
            }
            //Освобождение игроков
            const { player1, player2 } = JSON.parse(
              JSON.stringify(games.find(({ id }) => id === game.id))
            )
            delete player1.wonGames
            delete player1.pocketedBalls
            delete player2.wonGames
            delete player2.pocketedBalls
            player1.active = false
            player2.active = false
            dispatch(editPlayer(player1))
            dispatch(editPlayer(player2))
          },
        },
      ]
    )
  }

  const players = useSelector((state) => state.player.players)

  const saveHandler = (game) => {
    setModal(false)
    dispatch(addGame(game))

    const player1 = players.find(({ id }) => id === game.player1.id)
    player1.active = true
    dispatch(editPlayer(player1))
    const player2 = players.find(({ id }) => id === game.player2.id)
    player2.active = true
    dispatch(editPlayer(player2))
  }

  const changeHandler = (game) => {
    setModalTable(false)
    dispatch(changeGame(game))

    const table = game.table
    table.active = true
    dispatch(editTable(table))
  }

  const gamesCurrent = useSelector((state) => state.game.gamesCurrent)

  return (
    <Layout style={styles.wrap}>
      <CreateGameModal
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <CreateTableForGameModal
        visible={modalTable}
        onCancel={() => setModalTable(false)}
        onSave={changeHandler}
        idGame={idGameForTable.current}
      />

      {gamesCurrent.length ? (
        <FlatList
          data={gamesCurrent}
          keyExtractor={(game) => game.id.toString()}
          renderItem={({ item }) => (
            <Game
              data={item}
              onOpen={toOpenGameHandler}
              onRemove={removeHandler}
              status={item.table ? 'primary' : 'warning'}
            />
          )}
        />
      ) : (
        <View style={styles.wrapLogo}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo-school.png')}
          />
        </View>
      )}
    </Layout>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    padding: 15,
  },
  wrapLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
})
