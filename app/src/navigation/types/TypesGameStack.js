import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { TypesGameScreen } from '../../screens/TypesGameScreen'
import { screenOptions } from '../screenOptions'

const Stack = createStackNavigator()

export const TypesGameStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="TypesGameScreen" component={TypesGameScreen} />
    </Stack.Navigator>
  )
}
