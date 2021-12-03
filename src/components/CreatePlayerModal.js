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

export const CreatePlayerModal = ({ visible, onCancel, onSave }) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [patronymic, setPatronymic] = useState('')

  const clearState = () => {
    setName()
    setSurname()
    setPatronymic()
  }

  const saveHandler = () => {
    const player = { name, surname, patronymic }
    onSave(player)
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
          <AppTextBold style={styles.title}>Создание нового игрока</AppTextBold>
          <TextInput
            style={styles.input}
            onChangeText={setSurname}
            value={surname}
            placeholder="Введите фамилию"
          />
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Введите имя"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPatronymic}
            value={patronymic}
            placeholder="Введите отчество"
          />
          <View style={styles.buttons}>
            <AppButton onPress={cancelHandler} color={THEME.DANGER_COLOR}>
              Отменить
            </AppButton>
            <AppButton onPress={saveHandler}>Создать игрока</AppButton>
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
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
