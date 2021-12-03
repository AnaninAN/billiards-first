import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { THEME } from '../../theme'

import { GamesCurrentStack } from './GamesCurrentStack'
import { GamesComplitedStack } from './GamesComplitedStack'

const Tab = createMaterialBottomTabNavigator()

export const GamesBottomTub = () => {
  return (
    <Tab.Navigator
      shifting={true}
      activeColor={THEME.TEXT_COLOR}
      screenOptions={{
        tabBarColor: THEME.MAIN_COLOR,
      }}
    >
      <Tab.Screen
        name="GamesCurrentStack"
        component={GamesCurrentStack}
        options={{
          tabBarLabel: 'Текущая',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="billiards" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="GamesComplitedStack"
        component={GamesComplitedStack}
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
