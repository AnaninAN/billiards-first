import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { GamesCurrentScreen } from '../../screens/GamesCurrentScreen'
import { screenOptions } from '../screenOptions'

const Stack = createStackNavigator()

export const GamesCurrentStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="GamesCurrentScreen" component={GamesCurrentScreen} />
    </Stack.Navigator>
  )
}
