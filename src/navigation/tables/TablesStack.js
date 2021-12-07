import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { TablesScreen } from '../../screens/TablesScreen'
import { screenOptions } from '../screenOptions'

const Stack = createStackNavigator()

export const TablesStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="TablesScreen" component={TablesScreen} />
    </Stack.Navigator>
  )
}
