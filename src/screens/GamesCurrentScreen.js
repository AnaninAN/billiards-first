import React, { useLayoutEffect, useEffect, useState } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { StyleSheet, FlatList } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'

import {
  AppIonicons,
  AppMaterialCommunityIcons,
} from '../components/AppHeaderIcon'
import { loadGames, addGame } from '../store/actions/gameAction'
import { loadTypesGame } from '../store/actions/typeAction'
import { loadPlayers } from '../store/actions/playerAction'
import { Game } from '../components/Game'
import { CreateGameModal } from '../components/CreateGameModal'

export const GamesCurrentScreen = ({
  navigation: { setOptions, toggleDrawer, navigate },
}) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    dispatch(loadGames())
    dispatch(loadTypesGame())
    dispatch(loadPlayers())
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
    navigate('GameCurrentScreen', {
      idGame: game.id,
    })
  }

  const removeHandler = () => {}

  const saveHandler = (game) => {
    setModal(false)
    dispatch(addGame(game))
  }

  const gamesCurrent = useSelector((state) => state.game.gamesCurrent)

  return (
    <Layout style={styles.wrap}>
      <CreateGameModal
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <FlatList
        data={gamesCurrent}
        keyExtractor={(game) => game.id.toString()}
        renderItem={({ item }) => (
          <Game
            data={item}
            onOpen={toOpenGameHandler}
            onRemove={removeHandler}
            status="primary"
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
