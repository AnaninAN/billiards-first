import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { THEME } from '../../theme'

import { CreateStack } from './CreateStack'
import { AllStack } from './AllStack'

const Tab = createMaterialBottomTabNavigator()

export const CreateAllBottomTub = () => {
  return (
    <Tab.Navigator
      initialRouteName="All"
      shifting={true}
      activeColor={THEME.TEXT_COLOR}
      screenOptions={{
        tabBarColor: THEME.MAIN_COLOR,
      }}
    >
      <Tab.Screen
        name="Create"
        component={CreateStack}
        options={{
          tabBarLabel: 'Новая игра',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="new-box" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="All"
        component={AllStack}
        options={{
          tabBarLabel: 'Все игры',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="all-inclusive"
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
