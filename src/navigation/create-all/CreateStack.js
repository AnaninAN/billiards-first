import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { CreateGameScreen } from '../../screens/CreateGameScreen'
import { screenOptions } from '../screenOptions'

const Stack = createStackNavigator()

export const CreateStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="CreateGameScreen" component={CreateGameScreen} />
    </Stack.Navigator>
  )
}
