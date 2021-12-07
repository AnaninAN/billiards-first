import React, { useLayoutEffect, useEffect, useState } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { View, StyleSheet, FlatList, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { loadTables, addTable } from '../store/actions/tableAction'
import { Table } from '../components/Table'
import { CreateTableModal } from '../components/CreateTableModal'

import {
  AppIonicons,
  AppMaterialCommunityIcons,
} from '../components/AppHeaderIcon'

export const TablesScreen = ({
  navigation: { setOptions, toggleDrawer, navigate },
}) => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    dispatch(loadTables())
  }, [dispatch])

  useLayoutEffect(() => {
    setOptions({
      title: 'Столы',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppIonicons}>
          <Item title="Menu" iconName="menu" onPress={() => toggleDrawer()} />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppMaterialCommunityIcons}>
          <Item title="New" iconName="new-box" onPress={() => setModal(true)} />
        </HeaderButtons>
      ),
    })
  }, [])

  const toOpenGameHandler = (table) => {
    navigate('TableScreen', {
      table,
    })
  }

  const saveHandler = (table) => {
    dispatch(addTable(table))
    setModal(false)
  }

  const removeHandler = (table) => {
    Alert.alert('Удаление стола', `Удалить стол "${table.name}"?`, [
      {
        text: 'Отмена',
        style: 'cancel',
      },
      { text: 'Удалить', onPress: () => {} },
    ])
  }

  const tables = useSelector((state) => state.table.tables)

  return (
    <View style={styles.wrap}>
      <CreateTableModal
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <FlatList
        data={tables}
        keyExtractor={(player) => player.id.toString()}
        renderItem={({ item }) => (
          <Table
            data={item}
            onOpen={toOpenGameHandler}
            onRemove={removeHandler}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    padding: 15,
  },
})
