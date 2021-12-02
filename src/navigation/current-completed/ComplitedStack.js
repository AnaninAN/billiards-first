import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ComplitedGameScreen } from '../../screens/ComplitedGameScreen'
import { screenOptions } from '../screenOptions'

const Stack = createStackNavigator()

export const ComplitedStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="ComplitedGameScreen"
        component={ComplitedGameScreen}
      />
    </Stack.Navigator>
  )
}
