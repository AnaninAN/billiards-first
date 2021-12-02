import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { CreateGameScreen } from '../../screens/CreateGameScreen'

const Stack = createStackNavigator()

export const CreateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateGameScreen" component={CreateGameScreen} />
    </Stack.Navigator>
  )
}
