import React, { useState, useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
  ScrollView,
  Dimensions,
} from 'react-native'
import { useDispatch } from 'react-redux'

import { THEME } from '../theme'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { AppButton } from '../components/ui/AppButton'
import { addGameType } from '../store/actions/typeAction'

export const CreateGameScreen = ({
  navigation: { setOptions, toggleDrawer },
}) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [games, setGames] = useState('')
  const [balls, setBalls] = useState('')

  useLayoutEffect(() => {
    setOptions({
      title: 'Создать игру',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title="Menu" iconName="menu" onPress={() => toggleDrawer()} />
        </HeaderButtons>
      ),
    })
  }, [])

  const addHandler = () => {
    dispatch(addGameType({ name, desc, games, balls }))
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder="Введите название игры"
            />
            <TextInput
              style={styles.input}
              onChangeText={setDesc}
              value={desc}
              placeholder="Введите описание"
              multiline
              numberOfLines={5}
            />
            <View style={styles.wrapRow}>
              <Text style={styles.text}>Количество игр</Text>
              <Text style={styles.text}>Количество шаров в игре</Text>
            </View>
            <View style={styles.wrapRow}>
              <TextInput
                style={styles.inputNum}
                onChangeText={setGames}
                value={games}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.inputNum}
                onChangeText={setBalls}
                value={balls}
                keyboardType="numeric"
              />
            </View>
          </View>
          <AppButton onPress={addHandler}>Создать игру</AppButton>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    height: Dimensions.get('window').height * 0.77,
    justifyContent: 'space-between',
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlignVertical: 'top',
    fontFamily: 'play-regular',
    fontSize: THEME.FONT_SIZE_INPUT,
  },
  inputNum: {
    width: '30%',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    textAlignVertical: 'top',
    fontFamily: 'play-regular',
    fontSize: THEME.FONT_SIZE_INPUT,
  },
  wrapRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    fontFamily: 'play-regular',
    fontSize: THEME.FONT_SIZE_TEXT,
    width: '35%',
    textAlign: 'center',
  },
})
