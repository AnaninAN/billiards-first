import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AllGameScreen } from '../../screens/AllGameScreen'
import { screenOptions } from '../screenOptions'

const Stack = createStackNavigator()

export const AllStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="AllGameScreen" component={AllGameScreen} />
    </Stack.Navigator>
  )
}
