import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'

import { default as theme } from '../theme_eva.json'

export const DrawerContent = (props) => (
  <View style={styles.wrapper}>
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.wrapLogo}>
        <Image
          source={require('../../assets/logo-sherlock-white-2.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.wrapMenu}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: theme['color-primary-600'],
  },
  wrapLogo: {
    paddingLeft: 50,
    paddingTop: 10,
    paddingBottom: 10,
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 50,
    marginBottom: 20,
  },
  wrapMenu: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
})
