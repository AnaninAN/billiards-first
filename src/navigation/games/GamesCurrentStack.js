import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { GamesCurrentScreen } from '../../screens/GamesCurrentScreen'
import { GameCurrentScreen } from '../../screens/GameCurrentScreen'
import { screenOptions } from '../screenOptions'

const Stack = createStackNavigator()

export const GamesCurrentStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="GamesCurrentScreen" component={GamesCurrentScreen} />
      <Stack.Screen name="GameCurrentScreen" component={GameCurrentScreen} />
    </Stack.Navigator>
  )
}
