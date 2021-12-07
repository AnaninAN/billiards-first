import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components'

export const TableScreen = ({ route, navigation: { goBack, setOptions } }) => {
  const { table } = route.params

  useLayoutEffect(() => {
    setOptions({
      title: table.name,
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
