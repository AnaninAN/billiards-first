import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { PlayersScreen } from '../../screens/PlayersScreen'
import { screenOptions } from '../screenOptions'

const Stack = createStackNavigator()

export const PlayersStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="PlayersScreen" component={PlayersScreen} />
    </Stack.Navigator>
  )
}
