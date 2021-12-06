import React, { useLayoutEffect, useEffect, useState } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, StyleSheet, FlatList, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import {
  AppIonicons,
  AppMaterialCommunityIcons,
} from '../components/AppHeaderIcon'
import {
  loadPlayers,
  addPlayer,
  removePlayer,
} from '../store/actions/playerAction'
import { Player } from '../components/Player'
import { CreatePlayerModal } from '../components/CreatePlayerModal'

export const PlayersScreen = ({
  navigation: { setOptions, toggleDrawer, navigate },
}) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    dispatch(loadPlayers())
  }, [dispatch])

  useLayoutEffect(() => {
    setOptions({
      title: 'Игроки',
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

  const toOpenGameHandler = (player) => {
    navigate('PlayerScreen', {
      player,
    })
  }

  const saveHandler = (player) => {
    dispatch(addPlayer(player))
    setModal(false)
  }

  const removeHandler = (player) => {
    Alert.alert('Удаление игрока', `Удалить игрока "${player.name}"?`, [
      {
        text: 'Отмена',
        style: 'cancel',
      },
      { text: 'Удалить', onPress: () => dispatch(removePlayer(player)) },
    ])
  }

  const players = useSelector((state) => state.player.players)

  return (
    <View style={styles.wrap}>
      <CreatePlayerModal
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <FlatList
        data={players}
        keyExtractor={(player) => player.id.toString()}
        renderItem={({ item }) => (
          <Player
            data={item}
            onOpen={toOpenGameHandler}
            onRemove={removeHandler}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    padding: 15,
  },
})
