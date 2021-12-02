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
} from 'react-native'

import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const CreateGameScreen = ({
  navigation: { setOptions, toggleDrawer },
}) => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [number, setNumber] = useState('0')
  const [balls, setBalls] = useState('0')

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

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
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
            numberOfLines={7}
          />
          <View style={styles.wrapRow}>
            <Text style={styles.text}>Количество игр</Text>
            <Text style={styles.text}>Количество шаров в игре</Text>
          </View>
          <View style={styles.wrapRow}>
            <TextInput
              style={styles.inputNum}
              onChangeText={setNumber}
              value={number}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.inputNum}
              onChangeText={setBalls}
              value={balls}
              keyboardType="numeric"
            />
          </View>
          <Button title="Создать игру" onPress={() => console.log('Button!')} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
    textAlignVertical: 'top',
    fontFamily: 'play-regular',
    fontSize: 25,
  },
  inputNum: {
    width: '30%',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    textAlignVertical: 'top',
    fontFamily: 'play-regular',
    fontSize: 25,
  },
  wrapRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  text: {
    fontFamily: 'play-regular',
    fontSize: 25,
    width: '45%',
    textAlign: 'center',
  },
})
