import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import {
  Layout,
  Select,
  SelectItem,
  Icon,
  IndexPath,
  Modal,
  Button,
} from '@ui-kitten/components'
import { useSelector } from 'react-redux'

import { AppText } from '../components/ui/AppText'

const PersonIcon = (props) => <Icon {...props} name="person-outline" />
const StarIcon = (props) => <Icon {...props} name="star-outline" />

export const CreateGameModal = ({ visible, onCancel, onSave }) => {
  const [selectedIndexTypeGame, setSelectedIndexTypeGame] = useState(
    new IndexPath(0)
  )
  const [selectedIndexPlayer1, setSelectedIndexPlayer1] = useState(
    new IndexPath(0)
  )
  const [selectedIndexPlayer2, setSelectedIndexPlayer2] = useState(
    new IndexPath(0)
  )

  const types = useSelector((state) => state.type.typesGame)
  const players = useSelector((state) => state.player.players)

  const dataTypes = types.map((type) => ({
    id: type.id,
    name: type.name,
  }))
  const dataPlayers1 = players.map((type) => ({
    id: type.id,
    name: `${type.surname} ${type.name} ${type.patronymic}`,
  }))
  const dataPlayers2 = players.map((type) => ({
    id: type.id,
    name: `${type.surname} ${type.name} ${type.patronymic}`,
  }))

  let displayValueTypeGame
  let displayValuePlayer1
  let displayValuePlayer2

  if (visible) {
    displayValueTypeGame = dataTypes[selectedIndexTypeGame.row].name
    displayValuePlayer1 = dataPlayers1[selectedIndexPlayer1.row].name
    displayValuePlayer2 = dataPlayers2[selectedIndexPlayer2.row].name
  }

  const renderOptionPerson = (title) => (
    <SelectItem key={title.id} title={title.name} accessoryLeft={PersonIcon} />
  )

  const renderOptionStar = (title) => (
    <SelectItem key={title.id} title={title.name} accessoryLeft={StarIcon} />
  )

  const cancelHandler = () => {
    onCancel()
  }

  const saveHandler = () => {
    const typeGame = types
      .filter(({ id }) => id === dataTypes[selectedIndexTypeGame.row].id)
      .map(({ name, games, balls }) => ({
        name,
        games,
        balls,
      }))[0]
    const player1 = {
      player1: players
        .filter(({ id }) => id === dataPlayers1[selectedIndexPlayer1.row].id)
        .map(({ name, surname, patronymic }) => ({
          name,
          surname,
          patronymic,
          pocketedBalls: 0,
          wonGames: 0,
        }))[0],
    }
    const player2 = {
      player2: players
        .filter(({ id }) => id === dataPlayers2[selectedIndexPlayer2.row].id)
        .map(({ name, surname, patronymic }) => ({
          name,
          surname,
          patronymic,
          pocketedBalls: 0,
          wonGames: 0,
        }))[0],
    }

    const game = { ...typeGame, ...player1, ...player2 }

    onSave(game)
  }

  return (
    <Modal
      visible={visible}
      style={styles.modal}
      backdropStyle={styles.backdrop}
    >
      <Layout style={styles.container}>
        <Select
          style={styles.select}
          size="large"
          selectedIndex={selectedIndexTypeGame}
          onSelect={(index) => setSelectedIndexTypeGame(index)}
          value={displayValueTypeGame}
          label="Выберите игру"
        >
          {dataTypes.map(renderOptionStar)}
        </Select>
        <Select
          style={styles.select}
          size="large"
          selectedIndex={selectedIndexPlayer1}
          onSelect={(index) => setSelectedIndexPlayer1(index)}
          value={displayValuePlayer1}
          label="Выберите первого игрока"
        >
          {dataPlayers1.map(renderOptionPerson)}
        </Select>
        <Select
          style={styles.select}
          size="large"
          selectedIndex={selectedIndexPlayer2}
          onSelect={(index) => setSelectedIndexPlayer2(index)}
          value={displayValuePlayer2}
          label="Выберите второго игрока"
        >
          {dataPlayers2.map(renderOptionPerson)}
        </Select>
        <Layout style={styles.wrapButtons}>
          <Button status="danger" onPress={cancelHandler}>
            Отмена
          </Button>
          <Button status="primary" onPress={saveHandler}>
            Создать
          </Button>
        </Layout>
      </Layout>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  modal: {
    width: '90%',
    flex: 1,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  select: {
    marginBottom: 20,
  },
  wrapButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
