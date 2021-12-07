import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { default as theme } from '../../theme_eva.json'

import { GamesCurrentStack } from './GamesCurrentStack'
import { GamesComplitedStack } from './GamesComplitedStack'

const Tab = createMaterialBottomTabNavigator()

export const GamesBottomTub = () => {
  return (
    <Tab.Navigator
      shifting={true}
      activeColor="#fff"
      screenOptions={{
        tabBarColor: theme['color-primary-900'],
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
