import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { AppTextBold } from './ui/AppTextBold'
import { AppText } from './ui/AppText'
import { THEME } from '../theme'

export const GameType = ({ type }) => {
  return (
    <View style={styles.wrap}>
      <AppTextBold style={styles.title}>{type.name}</AppTextBold>
      <AppText style={styles.span}>
        Количество игр для победы: <AppTextBold>{type.games}</AppTextBold>
      </AppText>
      <AppText style={styles.span}>
        Количество шаров в игре: <AppTextBold>{type.balls}</AppTextBold>
      </AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
  },
  span: {
    fontSize: 17,
  },
})
