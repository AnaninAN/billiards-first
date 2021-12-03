import React, { useLayoutEffect, useEffect, useState } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, StyleSheet, FlatList, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import {
  AppIonicons,
  AppMaterialCommunityIcons,
} from '../components/AppHeaderIcon'
import {
  loadTypesGame,
  addTypeGame,
  removeTypeGame,
} from '../store/actions/typeAction'
import { TypeGame } from '../components/TypeGame'
import { CreateTypeGameModal } from '../components/CreateTypeGameModal'

export const TypesGameScreen = ({
  navigation: { setOptions, toggleDrawer, navigate },
}) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    dispatch(loadTypesGame())
  }, [dispatch])

  useLayoutEffect(() => {
    setOptions({
      title: 'Все игры',
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

  const toOpenTypeGameHandler = (type) => {
    navigate('TypeGameScreen', {
      name: type.name,
    })
  }

  const saveHandler = (type) => {
    dispatch(addTypeGame(type))
    setModal(false)
  }

  const removeHandler = (type) => {
    Alert.alert('Удаление игры', `Удалить игру "${type.name}"?`, [
      {
        text: 'Отмена',
        style: 'cancel',
      },
      { text: 'Удалить', onPress: () => dispatch(removeTypeGame(type)) },
    ])
  }

  const typesGame = useSelector((state) => state.type.typesGame)

  return (
    <View style={styles.wrap}>
      <CreateTypeGameModal
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <FlatList
        data={typesGame}
        keyExtractor={(type) => type.id.toString()}
        renderItem={({ item }) => (
          <TypeGame
            type={item}
            onOpen={toOpenTypeGameHandler}
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
