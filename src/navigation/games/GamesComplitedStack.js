import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { GamesComplitedScreen } from '../../screens/GamesComplitedScreen'
import { screenOptions } from '../screenOptions'

const Stack = createStackNavigator()

export const GamesComplitedStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="GamesComplitedScreen"
        component={GamesComplitedScreen}
      />
    </Stack.Navigator>
  )
}
