import React from 'react'

import { AppTouchableOpacityCard } from './ui/AppTouchableOpacityCard'
import { AppTextBold } from './ui/AppTextBold'
import { AppText } from './ui/AppText'
import { default as theme } from '../theme_eva.json'

export const Game = (props) => {
  const { name, player1, player2, date, table } = props.data

  return (
    <AppTouchableOpacityCard {...props} status={props.status}>
      <AppTextBold category="h5">{name}</AppTextBold>
      <AppText category="h6">
        {player1.surname} {player1.name} {player1.patronymic}
      </AppText>
      <AppText category="h6">VS</AppText>

      <AppText category="h6">
        {player2.surname} {player2.name} {player2.patronymic}
      </AppText>
      <AppText style={{ marginTop: 5 }} appearance="hint">
        Дата встречи: {date}
      </AppText>
      <AppTextBold style={{ marginTop: 5, color: theme['color-danger-900'] }}>
        {table}
      </AppTextBold>
    </AppTouchableOpacityCard>
  )
}
