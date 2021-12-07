import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { TablesStack } from './TablesStack'
import { TableScreen } from '../../screens/TableScreen'
import { screenOptions } from '../screenOptions'

const Modal = createStackNavigator()

export const TableModal = () => {
  return (
    <Modal.Navigator screenOptions={screenOptions}>
      <Modal.Group>
        <Modal.Screen
          name="TablesStack"
          component={TablesStack}
          options={{ headerShown: false }}
        />
      </Modal.Group>
      <Modal.Group screenOptions={{ presentation: 'modal' }}>
        <Modal.Screen name="TableScreen" component={TableScreen} />
      </Modal.Group>
    </Modal.Navigator>
  )
}
