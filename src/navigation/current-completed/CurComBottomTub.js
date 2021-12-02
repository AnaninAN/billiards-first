import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { CurrentStack } from './CurrentStack'
import { ComplitedStack } from './ComplitedStack'

const Tab = createMaterialBottomTabNavigator()

export const CurComBottomTub = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Current" component={CurrentStack} />
      <Tab.Screen name="Complited" component={ComplitedStack} />
    </Tab.Navigator>
  )
}
