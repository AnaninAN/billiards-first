import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AllGameScreen } from '../../screens/AllGameScreen'

const Stack = createStackNavigator()

export const AllStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllGameScreen" component={AllGameScreen} />
    </Stack.Navigator>
  )
}
