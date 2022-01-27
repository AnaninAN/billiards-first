import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import { DrawerContent } from '../components/DrawerContent'

import { GamesBottomTub } from './games/GamesBottomTub'
import { SettingsBottomTub } from './settings/SettingsBottomTub'
import { AboutStack } from './about/AboutStack'

import { default as theme } from '../theme_eva.json'

const { Navigator, Screen, Group } = createDrawerNavigator()

export const MainDrawer = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: theme['color-primary-700'],
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: 'play-regular',
          fontSize: 15,
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Screen
        name="Games"
        component={GamesBottomTub}
        options={{
          title: 'Игры',
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="billiards-rack"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={SettingsBottomTub}
        options={{
          title: 'Настройки',
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      <Screen
        name="AboutAPP"
        component={AboutStack}
        options={{
          title: 'О приложении',
          drawerIcon: ({ color }) => (
            <Ionicons
              name="information-circle-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  )
}
