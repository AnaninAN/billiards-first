import React from 'react'
import { StyleSheet, View } from 'react-native'

export const AppCard = (props) => (
  <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
)

const styles = StyleSheet.create({
  default: {
    padding: 20,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
  },
})
