import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { GamesBottomTub } from './games/GamesBottomTub'
import { TypeGameModal } from './types/TypeGameModal'
import { PlayerModal } from './players/PalyerModal'
import { TableModal } from './tables/TableModal'
import { AboutStack } from './about/AboutStack'

const Drawer = createDrawerNavigator()

export const MainDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Main"
        component={GamesBottomTub}
        options={{ title: 'Главная' }}
      />
      {/* <Drawer.Screen name="Start game" /> */}
      <Drawer.Screen
        name="TypeGame"
        component={TypeGameModal}
        options={{ title: 'Типы игр' }}
      />
      <Drawer.Screen
        name="Players"
        component={PlayerModal}
        options={{ title: 'Игроки' }}
      />
      <Drawer.Screen
        name="Tables"
        component={TableModal}
        options={{ title: 'Столы' }}
      />
      <Drawer.Screen
        name="About APP"
        component={AboutStack}
        options={{ title: 'О приложении' }}
      />
    </Drawer.Navigator>
  )
}
