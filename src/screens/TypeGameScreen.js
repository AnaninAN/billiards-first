import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components'

export const TypeGameScreen = ({
  route,
  navigation: { goBack, setOptions },
}) => {
  const { name } = route.params

  useLayoutEffect(() => {
    setOptions({
      title: name,
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
