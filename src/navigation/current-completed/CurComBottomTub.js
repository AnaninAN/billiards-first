import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { THEME } from '../../theme'

import { CurrentStack } from './CurrentStack'
import { ComplitedStack } from './ComplitedStack'

const Tab = createMaterialBottomTabNavigator()

export const CurComBottomTub = () => {
  return (
    <Tab.Navigator
      shifting={true}
      activeColor={THEME.TEXT_COLOR}
      screenOptions={{
        tabBarColor: THEME.MAIN_COLOR,
      }}
    >
      <Tab.Screen
        name="Current"
        component={CurrentStack}
        options={{
          tabBarLabel: 'Текущая',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="billiards" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Complited"
        component={ComplitedStack}
        options={{
          tabBarLabel: 'Завершенные',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="billiards-rack"
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
