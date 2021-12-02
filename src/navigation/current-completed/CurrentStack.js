import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { CurrentGameScreen } from '../../screens/CurrentGameScreen'
import { screenOptions } from '../screenOptions'

const Stack = createStackNavigator()

export const CurrentStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="CurrentGameScreen" component={CurrentGameScreen} />
    </Stack.Navigator>
  )
}
