import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components'

export const AppText = (props) => {
  const { children, style, ...rest } = props
  return (
    <Text style={{ ...styles.default, ...style }} {...rest}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'play-regular',
  },
})
