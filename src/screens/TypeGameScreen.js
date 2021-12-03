import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export const TypeGameScreen = ({ route, navigation: { goBack } }) => {
  const { name } = route.params

  return (
    <View style={styles.center}>
      <Text>{name}</Text>
      <Button title="Назад" onPress={() => goBack()} />
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
