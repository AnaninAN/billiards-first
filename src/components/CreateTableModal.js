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

export const TableContent = ({
  title,
  nameInputState,
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
            {...nameInputState}
            placeholder="Введите название стола"
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

export const CreateTableModal = ({ visible, onCancel, onSave }) => {
  const [name, setName] = useState('')

  const clearState = () => {
    setName('')
  }

  const saveHandler = () => {
    const table = { name }
    onSave(table)
    clearState()
  }

  const cancelHandler = () => {
    clearState()
    onCancel()
  }

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <TableContent
        title="Создание нового стола"
        nameInputState={{ value: name, onChangeText: setName }}
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
