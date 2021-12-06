import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { Input, Button } from '@ui-kitten/components'

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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrap}>
          <AppTextBold style={styles.title} category="h4">
            Создание игры
          </AppTextBold>
          <Input
            style={styles.input}
            size="large"
            textStyle={{ fontSize: 18 }}
            onChangeText={setName}
            value={name}
            placeholder="Введите название игры"
          />

          <Input
            style={styles.input}
            multiline={true}
            textStyle={{ minHeight: 128, fontSize: 18 }}
            placeholder="Введите описание"
            onChangeText={setDesc}
            value={desc}
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
              onChangeText={setGames}
              value={games}
              keyboardType="numeric"
            />

            <Input
              style={styles.inputNum}
              size="large"
              textStyle={{ fontSize: 18 }}
              onChangeText={setBalls}
              value={balls}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.wrapButtons}>
            <Button status="danger" onPress={cancelHandler}>
              Отменить
            </Button>
            <Button status="primary" onPress={saveHandler}>
              Создать
            </Button>
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
