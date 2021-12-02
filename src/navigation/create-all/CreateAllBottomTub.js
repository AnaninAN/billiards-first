import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { CreateStack } from './CreateStack'
import { AllStack } from './AllStack'

const Tab = createMaterialBottomTabNavigator()

export const CreateAllBottomTub = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Create" component={CreateStack} />
      <Tab.Screen name="All" component={AllStack} />
    </Tab.Navigator>
  )
}
