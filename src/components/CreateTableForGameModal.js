import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
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

import { AppTextBold } from '../components/ui/AppTextBold'

const SpeakerIcon = (props) => <Icon {...props} name="speaker-outline" />

export const CreateTableForGameModal = ({
  visible,
  onCancel,
  onSave,
  idGame,
}) => {
  const [selectedIndexTable, setSelectedIndexTable] = useState(new IndexPath(0))

  const clearState = () => {
    setSelectedIndexTable(new IndexPath(0))
  }

  const gamesCurrent = useSelector((state) => state.game.gamesCurrent)
  const tables = useSelector((state) => state.table.tables)

  const dataTables = [
    { id: 0, name: '<стол>' },
    ...tables
      .filter(({ active }) => !active)
      .map((table) => ({
        id: table.id,
        name: table.name,
      })),
  ]

  const disabledButtonCreate = selectedIndexTable.row === 0

  const displayValueTable = dataTables[selectedIndexTable.row].name

  const renderOptionSpeaker = (title) => (
    <SelectItem key={title.id} title={title.name} accessoryLeft={SpeakerIcon} />
  )

  const cancelHandler = () => {
    onCancel()
    clearState()
  }

  const saveHandler = () => {
    const gameCurrent = gamesCurrent.find(({ id }) => id === idGame)
    const tableCurrent = tables.filter(
      ({ id }) => id === dataTables[selectedIndexTable.row].id
    )
    const table = tableCurrent.map(({ name }) => ({
      table: name,
    }))[0]

    const game = { ...gameCurrent, ...table }

    onSave(game)
    clearState()
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
          selectedIndex={selectedIndexTable}
          onSelect={(index) => setSelectedIndexTable(index)}
          value={displayValueTable}
          label="Выберите стол"
        >
          {dataTables.map(renderOptionSpeaker)}
        </Select>
        <Layout style={styles.wrapButtons}>
          <Button status="danger" onPress={cancelHandler}>
            Отмена
          </Button>
          <Button
            disabled={disabledButtonCreate}
            status="primary"
            onPress={saveHandler}
          >
            Назначить
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
    width: '95%',
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
