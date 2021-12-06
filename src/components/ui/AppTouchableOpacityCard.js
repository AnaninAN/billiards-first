import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Card } from '@ui-kitten/components'

export const AppTouchableOpacityCard = (props) => {
  const { children, data, onOpen, onRemove, ...rest } = props
  return (
    <TouchableOpacity>
      <Card
        {...rest}
        style={{ margin: 2 }}
        activeOpacity={0.4}
        onPress={() => onOpen(data)}
        onLongPress={() => onRemove(data)}
      >
        {children}
      </Card>
    </TouchableOpacity>
  )
}
