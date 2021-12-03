import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { THEME } from '../../theme'
import { AppTextBold } from './AppTextBold'

export const AppButton = ({
  children,
  color = THEME.MAIN_COLOR,
  fs = 20,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold
          style={{
            color:
              color === THEME.MAIN_COLOR ? THEME.TEXT_COLOR : THEME.MAIN_COLOR,
            fontSize: fs,
          }}
        >
          {children}
        </AppTextBold>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
