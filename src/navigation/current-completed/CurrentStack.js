import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { CurrentGameScreen } from '../../screens/CurrentGameScreen'

const Stack = createStackNavigator()

export const CurrentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CurrentGameScreen" component={CurrentGameScreen} />
    </Stack.Navigator>
  )
}
