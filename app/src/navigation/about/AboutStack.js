import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AboutScreen } from '../../screens/AboutScreen'
import { screenOptions } from '../screenOptions'

const Stack = createStackNavigator()

export const AboutStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
    </Stack.Navigator>
  )
}
