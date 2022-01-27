import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

import { default as theme } from '../../theme_eva.json'

import { TypeGameModal } from '../types/TypeGameModal'
import { PlayerModal } from '../players/PalyerModal'
import { TableModal } from '../tables/TableModal'

const Tab = createMaterialBottomTabNavigator()

export const SettingsBottomTub = () => {
  return (
    <Tab.Navigator
      shifting={true}
      activeColor="#fff"
      screenOptions={{
        tabBarColor: theme['color-primary-900'],
      }}
    >
      <Tab.Screen
        name="TypesGame"
        component={TypeGameModal}
        options={{
          tabBarLabel: 'Виды игр',
          tabBarIcon: ({ color }) => (
            <Ionicons name="game-controller-outline" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Players"
        component={PlayerModal}
        options={{
          tabBarLabel: 'Игроки',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tables"
        component={TableModal}
        options={{
          tabBarLabel: 'Столы',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="table-furniture"
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
