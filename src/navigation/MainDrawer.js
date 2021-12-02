import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { CurComBottomTub } from './current-completed/CurComBottomTub'
import { CreateAllBottomTub } from './create-all/CreateAllBottomTub'

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
        name="Create game"
        component={CreateAllBottomTub}
        options={{ title: 'Игры' }}
      />
      {/* <Drawer.Screen name="Players" />
      <Drawer.Screen name="About APP" /> */}
    </Drawer.Navigator>
  )
}
