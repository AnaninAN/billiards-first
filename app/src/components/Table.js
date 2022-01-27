import React from 'react'

import { AppTouchableOpacityCard } from './ui/AppTouchableOpacityCard'
import { AppTextBold } from './ui/AppTextBold'

export const Table = (props) => {
  const { name } = props.data

  return (
    <AppTouchableOpacityCard {...props} status="primary">
      <AppTextBold category="h5">{name}</AppTextBold>
    </AppTouchableOpacityCard>
  )
}
