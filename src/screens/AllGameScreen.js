import React, { useLayoutEffect, useEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { loadGameTypes } from '../store/actions/typeAction'
import { GameType } from '../components/GameType'

export const AllGameScreen = ({ navigation: { setOptions, toggleDrawer } }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGameTypes())
  }, [dispatch])

  useLayoutEffect(() => {
    setOptions({
      title: 'Все игры',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title="Menu" iconName="menu" onPress={() => toggleDrawer()} />
        </HeaderButtons>
      ),
    })
  }, [])

  const gameTypes = useSelector((state) => state.type.gameTypes)

  return (
    <View style={styles.wrap}>
      <FlatList
        data={gameTypes}
        keyExtractor={(type) => type.id.toString()}
        renderItem={({ item }) => <GameType type={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    padding: 15,
  },
})
