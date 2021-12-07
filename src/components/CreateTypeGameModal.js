import React, { useState } from 'react'
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native'
import { Input, Button } from '@ui-kitten/components'

import { AppTextBold } from './ui/AppTextBold'

export const TypeGameContent = ({
  title,
  nameInputState,
  descInputState,
  gamesInputState,
  ballsInputState,
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
          <AppTextBold style={styles.title} category="h4">
            {title}
          </AppTextBold>
          <Input
            style={styles.input}
            size="large"
            textStyle={{ fontSize: 18 }}
            {...nameInputState}
            placeholder="Введите название игры"
            disabled={disabled}
          />

          <Input
            style={styles.input}
            multiline={true}
            textStyle={{ minHeight: 128, fontSize: 18 }}
            {...descInputState}
            placeholder="Введите описание"
            disabled={disabled}
          />
          <View style={styles.wrapRow}>
            <Text style={styles.text}>Количество игр</Text>
            <Text style={styles.text}>Количество шаров в игре</Text>
          </View>
          <View style={styles.wrapRow}>
            <Input
              style={styles.inputNum}
              size="large"
              textStyle={{ fontSize: 18 }}
              {...gamesInputState}
              keyboardType="numeric"
              disabled={disabled}
            />

            <Input
              style={styles.inputNum}
              size="large"
              textStyle={{ fontSize: 18 }}
              {...ballsInputState}
              keyboardType="numeric"
              disabled={disabled}
            />
          </View>
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
    const type = {
      name,
      desc,
      games: parseInt(games, 10),
      balls: parseInt(balls, 10),
    }
    onSave(type)
    clearState()
  }

  const cancelHandler = () => {
    clearState()
    onCancel()
  }

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <TypeGameContent
        title="Создание игры"
        nameInputState={{ value: name, onChangeText: setName }}
        descInputState={{ value: desc, onChangeText: setDesc }}
        gamesInputState={{ value: games, onChangeText: setGames }}
        ballsInputState={{ value: balls, onChangeText: setBalls }}
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
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    marginVertical: 10,
  },
  inputNum: {
    width: '30%',
  },
  wrapRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    fontFamily: 'play-regular',
    fontSize: 18,
    width: '35%',
    textAlign: 'center',
  },
  wrapButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
})
