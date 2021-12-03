import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { GamesStack } from './GamesStack'
import { TypeGameScreen } from '../../screens/TypeGameScreen'
import { screenOptions } from '../screenOptions'

const Modal = createStackNavigator()

export const GameModal = () => {
  return (
    <Modal.Navigator screenOptions={screenOptions}>
      <Modal.Group>
        <Modal.Screen
          name="GamesStack"
          component={GamesStack}
          options={{ headerShown: false }}
        />
      </Modal.Group>
      <Modal.Group screenOptions={{ presentation: 'modal' }}>
        <Modal.Screen name="TypeGameScreen" component={TypeGameScreen} />
      </Modal.Group>
    </Modal.Navigator>
  )
}
