import React, { useLayoutEffect, useState } from 'react'
import { LogBox } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'

import { MyFunc } from '../app_func'

import { PlayerContent } from '../components/CreatePlayerModal'
import {
  AppMaterialCommunityIcons,
  AppFontAwesome5,
} from '../components/AppHeaderIcon'
import { editPlayer } from '../store/actions/playerAction'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
])

export const PlayerScreen = ({ route, navigation: { goBack, setOptions } }) => {
  const dispatch = useDispatch()

  const { id, name, surname, patronymic } = route.params.player
  const { onRemove } = route.params
  const [disabled, setDisabled] = useState(true)

  const [nameValue, setNameValue] = useState(name)
  const [surnameValue, setSurnameValue] = useState(surname)
  const [patronymicValue, setPatronymicValue] = useState(patronymic)

  useLayoutEffect(() => {
    setOptions({
      title: MyFunc.surnameNP(route.params.player),
      headerRight: () =>
        disabled && (
          <HeaderButtons HeaderButtonComponent={AppMaterialCommunityIcons}>
            <Item
              title="Edit"
              iconName="account-edit"
              onPress={() => setDisabled(false)}
            />
            <Item
              title="Delete"
              iconName="delete-forever"
              onPress={() => {
                onRemove(route.params.player)
              }}
            />
          </HeaderButtons>
        ),
    })
  }, [disabled])

  const cancelHandler = () => {
    setNameValue(name)
    setSurnameValue(surname)
    setPatronymicValue(patronymic)
    setDisabled(true)
  }

  const saveHandler = () => {
    const player = {
      id,
      name: nameValue,
      surname: surnameValue,
      patronymic: patronymicValue,
    }
    dispatch(editPlayer(player))
    goBack()
  }

  return (
    <PlayerContent
      title={disabled ? 'Просмотр игрока' : 'Редактировать игрока'}
      nameInputState={{ value: nameValue, onChangeText: setNameValue }}
      surnameInputState={{ value: surnameValue, onChangeText: setSurnameValue }}
      patronymicInputState={{
        value: patronymicValue,
        onChangeText: setPatronymicValue,
      }}
      cancelHandler={cancelHandler}
      saveHandler={saveHandler}
      dangerButtonName="Отмена"
      primaryButtonName="Сохранить"
      disabled={disabled}
    />
  )
}
