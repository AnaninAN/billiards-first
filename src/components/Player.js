import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { AppTextBold } from './ui/AppTextBold'
import { AppCard } from './ui/AppCard'

export const Player = ({ player, onOpen, onRemove }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(player)}
      onLongPress={() => onRemove(player)}
    >
      <AppCard>
        <AppTextBold style={styles.title}>
          {player.surname} {player.name} {player.patronymic}
        </AppTextBold>
      </AppCard>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
})
