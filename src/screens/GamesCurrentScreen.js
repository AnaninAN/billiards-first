import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, StyleSheet, Text } from 'react-native'

import { AppIonicons } from '../components/AppHeaderIcon'

export const GamesCurrentScreen = ({
  navigation: { setOptions, toggleDrawer },
}) => {
  useLayoutEffect(() => {
    setOptions({
      title: 'Текущие игры',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppIonicons}>
          <Item title="Menu" iconName="menu" onPress={() => toggleDrawer()} />
        </HeaderButtons>
      ),
    })
  }, [])

  return (
    <View>
      <Text>Game Current Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})