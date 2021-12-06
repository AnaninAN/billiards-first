import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components'

import { MyFunc } from '../app_func'

export const PlayerScreen = ({ route, navigation: { goBack, setOptions } }) => {
  const { player } = route.params

  useLayoutEffect(() => {
    setOptions({
      title: MyFunc.surnameNP(player),
    })
  }, [])

  return (
    <View style={styles.center}>
      <Button onPress={() => goBack()}>Назад</Button>
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
