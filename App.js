import 'react-native-gesture-handler'

import React, { useState } from 'react'
import { Provider } from 'react-redux'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import { bootstrap } from './src/bootstrap'
import { AppNavigation } from './src/navigation/AppNavigation'
import store from './src/store'
import { default as theme } from './src/theme_eva.json'
import { default as mapping } from './mapping.json'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(e) => console.log('AppLoading', e)}
      />
    )
  }

  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...theme }}
        customMapping={mapping}
      >
        <AppNavigation />
        <StatusBar style="light" />
      </ApplicationProvider>
    </Provider>
  )
}
