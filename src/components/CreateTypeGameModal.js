import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Modal,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'

import { THEME } from '../theme'
import { AppButton } from './ui/AppButton'
import { AppTextBold } from './ui/AppTextBold'

export const CreateTypeGameModal = ({ visible, onCancel, onSave }) => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [games, setGames] = useState('')
  const [balls, setBalls] = useState('')

  const clearState = () => {
    setName('')
    setDesc('')
    setGames('')
    setBalls('')
  }

  const saveHandler = () => {
    const type = { name, desc, games, balls }
    onSave(type)
    clearState()
  }

  const cancelHandler = () => {
    clearState()
    onCancel()
  }

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrap}>
          <AppTextBold style={styles.title}>Создание новой игры</AppTextBold>
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
          <View style={styles.buttons}>
            <AppButton onPress={cancelHandler} color={THEME.DANGER_COLOR}>
              Отменить
            </AppButton>
            <AppButton onPress={saveHandler}>Создать игру</AppButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    marginBottom: 15,
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
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
