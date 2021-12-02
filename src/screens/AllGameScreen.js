import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, StyleSheet, Text } from 'react-native'

import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const AllGameScreen = ({ navigation: { setOptions, toggleDrawer } }) => {
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

  return (
    <View>
      <Text>All Game Screen</Text>
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
