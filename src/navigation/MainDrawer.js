import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import { DrawerContent } from '../components/DrawerContent'

import { GamesBottomTub } from './games/GamesBottomTub'
import { TypeGameModal } from './types/TypeGameModal'
import { PlayerModal } from './players/PalyerModal'
import { TableModal } from './tables/TableModal'
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
        name="Main"
        component={GamesBottomTub}
        options={{
          title: 'Главная',
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Screen
        name="TypesGame"
        component={TypeGameModal}
        options={{
          title: 'Виды игр',
          drawerIcon: ({ color }) => (
            <Ionicons name="game-controller-outline" size={22} color={color} />
          ),
        }}
      />
      <Screen
        name="Players"
        component={PlayerModal}
        options={{
          title: 'Игроки',
          drawerIcon: ({ color }) => (
            <Ionicons name="people-outline" size={22} color={color} />
          ),
        }}
      />
      <Screen
        name="Tables"
        component={TableModal}
        options={{
          title: 'Столы',
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="table-furniture"
              size={22}
              color={color}
            />
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
