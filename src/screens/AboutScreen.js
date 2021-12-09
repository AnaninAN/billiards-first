import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppIonicons } from '../components/AppHeaderIcon'

export const AboutScreen = ({ navigation: { setOptions, toggleDrawer } }) => {
  useLayoutEffect(() => {
    setOptions({
      title: 'О приложении',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppIonicons}>
          <Item title="Menu" iconName="menu" onPress={() => toggleDrawer()} />
        </HeaderButtons>
      ),
    })
  }, [])

  return (
    <View style={styles.center}>
      <Text>About Screen</Text>
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
