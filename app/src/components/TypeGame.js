import React from 'react'

import { AppTouchableOpacityCard } from './ui/AppTouchableOpacityCard'
import { AppTextBold } from './ui/AppTextBold'
import { AppText } from './ui/AppText'

export const TypeGame = (props) => {
  const { name, games, balls } = props.data

  return (
    <AppTouchableOpacityCard {...props} status="primary">
      <AppTextBold category="h5">{name}</AppTextBold>
      <AppText category="h6">
        Количество игр для победы:{' '}
        <AppTextBold category="h6">{games}</AppTextBold>
      </AppText>
      <AppText category="h6">
        Количество шаров в игре:{' '}
        <AppTextBold category="h6">{balls}</AppTextBold>
      </AppText>
    </AppTouchableOpacityCard>
  )
}
