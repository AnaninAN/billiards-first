import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { StyleSheet, FlatList } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'

import {
  AppIonicons,
  AppMaterialCommunityIcons,
} from '../components/AppHeaderIcon'
import { loadGames, addGame, changeGame } from '../store/actions/gameAction'
import { loadTypesGame } from '../store/actions/typeAction'
import { loadPlayers, editPlayer } from '../store/actions/playerAction'
import { loadTables, editTable } from '../store/actions/tableAction'
import { Game } from '../components/Game'
import { CreateGameModal } from '../components/CreateGameModal'
import { CreateTableForGameModal } from '../components/CreateTableForGameModal'

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
          <Item title="New" iconName="new-box" onPress={() => setModal(true)} />
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

  const removeHandler = () => {}

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

  const tables = useSelector((state) => state.table.tables)

  const changeHandler = (game) => {
    setModalTable(false)
    dispatch(changeGame(game))

    const table = tables.find(({ name }) => name === game.table)
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
    </Layout>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    padding: 15,
  },
})
