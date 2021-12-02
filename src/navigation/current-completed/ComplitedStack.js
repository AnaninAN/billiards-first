import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ComplitedGameScreen } from '../../screens/ComplitedGameScreen'

const Stack = createStackNavigator()

export const ComplitedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ComplitedGameScreen"
        component={ComplitedGameScreen}
      />
    </Stack.Navigator>
  )
}
