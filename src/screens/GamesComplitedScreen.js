import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { StyleSheet, FlatList, Image, View } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { useSelector } from 'react-redux'

import { AppIonicons } from '../components/AppHeaderIcon'
import { Game } from '../components/Game'

export const GamesComplitedScreen = ({
  navigation: { setOptions, toggleDrawer, navigate },
}) => {
  useLayoutEffect(() => {
    setOptions({
      title: 'Завершенные игры',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppIonicons}>
          <Item title="Menu" iconName="menu" onPress={() => toggleDrawer()} />
        </HeaderButtons>
      ),
    })
  }, [])

  const toOpenGameHandler = (game) => {
    navigate('GameComplitedScreen', {
      idGame: game.id,
    })
  }

  const removeHandler = () => {}

  const gamesComplited = useSelector((state) => state.game.gamesComplited)

  return (
    <Layout style={styles.wrap}>
      {gamesComplited.length ? (
        <FlatList
          data={gamesComplited}
          keyExtractor={(game) => game.id}
          renderItem={({ item }) => (
            <Game
              data={item}
              onOpen={toOpenGameHandler}
              onRemove={removeHandler}
              status="danger"
            />
          )}
        />
      ) : (
        <View style={styles.wrapLogo}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo-school.png')}
          />
        </View>
      )}
    </Layout>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    padding: 15,
  },
  wrapLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
})
