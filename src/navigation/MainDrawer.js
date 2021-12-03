import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { CurComBottomTub } from './current-completed/CurComBottomTub'
import { GameModal } from './games/GameModal'
import { PlayerModal } from './players/PalyerModal'

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
        component={CurComBottomTub}
        options={{ title: 'Главная' }}
      />
      {/* <Drawer.Screen name="Start game" /> */}
      <Drawer.Screen
        name="Games"
        component={GameModal}
        options={{ title: 'Игры' }}
      />
      <Drawer.Screen
        name="Players"
        component={PlayerModal}
        options={{ title: 'Игроки' }}
      />
      {/* <Drawer.Screen name="About APP" /> */}
    </Drawer.Navigator>
  )
}
