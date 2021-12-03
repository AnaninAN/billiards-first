import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

import { MainDrawer } from './MainDrawer'

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainDrawer />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
