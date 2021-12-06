import React from 'react'
import { View, StyleSheet } from 'react-native'

import { AppTextBold } from './AppTextBold'
import { AppText } from './AppText'

export const AppCard = ({ children, style, color = '#fff', bold = null }) => {
  const Text = bold ? AppTextBold : AppText
  const fs = bold ? 'h3' : 'h5'

  return (
    <View style={{ ...styles.wrap, ...style }}>
      <View style={{ ...styles.line, backgroundColor: color }}></View>
      <Text category={fs}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: '100%',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 5,
  },
  line: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 5,
  },
})
