import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { THEME } from '../theme'
import { AppTextBold } from './ui/AppTextBold'
import { AppText } from './ui/AppText'
import { AppCard } from './ui/AppCard'

export const TypeGame = ({ type, onOpen, onRemove }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(type)}
      onLongPress={() => onRemove(type)}
    >
      <AppCard>
        <AppTextBold style={styles.title}>{type.name}</AppTextBold>
        <AppText style={styles.span}>
          Количество игр для победы: <AppTextBold>{type.games}</AppTextBold>
        </AppText>
        <AppText style={styles.span}>
          Количество шаров в игре: <AppTextBold>{type.balls}</AppTextBold>
        </AppText>
      </AppCard>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  span: {
    fontSize: 17,
  },
})
