import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { PlayersStack } from './PlayersStack'
import { PlayerScreen } from '../../screens/PlayerScreen'
import { screenOptions } from '../screenOptions'

const Modal = createStackNavigator()

export const PlayerModal = () => {
  return (
    <Modal.Navigator screenOptions={screenOptions}>
      <Modal.Group>
        <Modal.Screen
          name="PlayersStack"
          component={PlayersStack}
          options={{ headerShown: false }}
        />
      </Modal.Group>
      <Modal.Group screenOptions={{ presentation: 'modal' }}>
        <Modal.Screen name="PlayerScreen" component={PlayerScreen} />
      </Modal.Group>
    </Modal.Navigator>
  )
}
