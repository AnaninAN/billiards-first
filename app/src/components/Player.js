import React from 'react'

import { AppTouchableOpacityCard } from './ui/AppTouchableOpacityCard'
import { AppTextBold } from './ui/AppTextBold'

export const Player = (props) => {
  const { name, surname, patronymic } = props.data

  return (
    <AppTouchableOpacityCard {...props} status="primary">
      <AppTextBold category="h5">
        {surname} {name} {patronymic}
      </AppTextBold>
    </AppTouchableOpacityCard>
  )
}
