import React, { useState } from 'react'
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native'
import { Button, Input } from '@ui-kitten/components'

import { AppTextBold } from './ui/AppTextBold'

export const PlayerContent = ({
  title,
  nameInputState,
  surnameInputState,
  patronymicInputState,
  cancelHandler,
  saveHandler,
  dangerButtonName,
  primaryButtonName,
  disabled,
}) => {
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrap}>
          <AppTextBold style={styles.title}>{title}</AppTextBold>
          <Input
            style={styles.input}
            size="large"
            textStyle={{ fontSize: 18 }}
            {...surnameInputState}
            placeholder="Введите фамилию"
            disabled={disabled}
          />
          <Input
            style={styles.input}
            size="large"
            textStyle={{ fontSize: 18 }}
            {...nameInputState}
            placeholder="Введите имя"
            disabled={disabled}
          />

          <Input
            style={styles.input}
            size="large"
            textStyle={{ fontSize: 18 }}
            {...patronymicInputState}
            placeholder="Введите отчество"
            disabled={disabled}
          />
          {!disabled && (
            <View style={styles.wrapButtons}>
              <Button status="danger" onPress={cancelHandler}>
                {dangerButtonName}
              </Button>
              <Button status="primary" onPress={saveHandler}>
                {primaryButtonName}
              </Button>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

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
      <PlayerContent
        title="Создание нового игрока"
        nameInputState={{ value: name, onChangeText: setName }}
        surnameInputState={{ value: surname, onChangeText: setSurname }}
        patronymicInputState={{
          value: patronymic,
          onChangeText: setPatronymic,
        }}
        cancelHandler={cancelHandler}
        saveHandler={saveHandler}
        dangerButtonName="Отменить"
        primaryButtonName="Создать"
      />
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    marginBottom: 15,
  },
  input: {
    marginVertical: 10,
  },
  wrapButtons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
