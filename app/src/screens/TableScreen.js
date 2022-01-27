import React, { useLayoutEffect, useState } from 'react'
import { LogBox } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'

import { TableContent } from '../components/CreateTableModal'
import { AppMaterialCommunityIcons } from '../components/AppHeaderIcon'
import { editTable } from '../store/actions/tableAction'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
])

export const TableScreen = ({ route, navigation: { goBack, setOptions } }) => {
  const dispatch = useDispatch()

  const { id, name } = route.params.table
  const { onRemove } = route.params
  const [disabled, setDisabled] = useState(true)

  const [nameValue, setNameValue] = useState(name)

  useLayoutEffect(() => {
    setOptions({
      title: name,
      headerRight: () =>
        disabled && (
          <HeaderButtons HeaderButtonComponent={AppMaterialCommunityIcons}>
            <Item
              title="Edit"
              iconName="file-document-edit"
              onPress={() => setDisabled(false)}
            />
            <Item
              title="Delete"
              iconName="delete-forever"
              onPress={() => {
                onRemove(route.params.table)
              }}
            />
          </HeaderButtons>
        ),
    })
  }, [disabled])

  const cancelHandler = () => {
    setNameValue(name)
    setDisabled(true)
  }

  const saveHandler = () => {
    const table = {
      id,
      name: nameValue,
    }
    dispatch(editTable(table))
    goBack()
  }

  return (
    <TableContent
      title={disabled ? 'Просмотр стола' : 'Редактировать стол'}
      nameInputState={{ value: nameValue, onChangeText: setNameValue }}
      cancelHandler={cancelHandler}
      saveHandler={saveHandler}
      dangerButtonName="Отмена"
      primaryButtonName="Сохранить"
      disabled={disabled}
    />
  )
}
