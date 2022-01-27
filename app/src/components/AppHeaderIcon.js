import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import { THEME } from '../theme'

export const AppIonicons = (props) => (
  <HeaderButton
    {...props}
    style={{ marginHorizontal: -3 }}
    iconSize={25}
    color={THEME.TEXT_COLOR}
    IconComponent={Ionicons}
  />
)

export const AppMaterialCommunityIcons = (props) => (
  <HeaderButton
    {...props}
    style={{ marginHorizontal: -3 }}
    iconSize={25}
    color={THEME.TEXT_COLOR}
    IconComponent={MaterialCommunityIcons}
  />
)
