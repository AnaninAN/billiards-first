import React, { useLayoutEffect, useEffect, useState } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { StyleSheet, FlatList, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from '@ui-kitten/components'

import {
  AppIonicons,
  AppMaterialCommunityIcons,
} from '../components/AppHeaderIcon'
import { addTypeGame, removeTypeGame } from '../store/actions/typeAction'
import { TypeGame } from '../components/TypeGame'
import { CreateTypeGameModal } from '../components/CreateTypeGameModal'

export const TypesGameScreen = ({
  navigation: { setOptions, toggleDrawer, navigate },
}) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

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
      type,
      onRemove: removeHandler,
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
      {
        text: 'Удалить',
        onPress: () => {
          dispatch(removeTypeGame(type))
          navigate('TypesGameStack')
        },
      },
    ])
  }

  const typesGame = useSelector((state) => state.type.typesGame)

  return (
    <Layout style={styles.wrap} level="2">
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
            data={item}
            onOpen={toOpenTypeGameHandler}
            onRemove={removeHandler}
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
