import React, { useLayoutEffect, useState } from 'react'
import { LogBox } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'

import { TypeGameContent } from '../components/CreateTypeGameModal'
import { AppMaterialCommunityIcons } from '../components/AppHeaderIcon'
import { editTypeGame } from '../store/actions/typeGameAction'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
])

export const TypeGameScreen = ({
  route,
  navigation: { goBack, setOptions },
}) => {
  const dispatch = useDispatch()

  const { name, desc, games, balls, id } = route.params.type
  const { onRemove } = route.params
  const [disabled, setDisabled] = useState(true)

  const [nameValue, setNameValue] = useState(name.toString())
  const [descValue, setDescValue] = useState(desc.toString())
  const [gamesValue, setGamesValue] = useState(games.toString())
  const [ballsValue, setBallsValue] = useState(balls.toString())

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
                onRemove(route.params.type)
              }}
            />
          </HeaderButtons>
        ),
    })
  }, [disabled])

  const cancelHandler = () => {
    setNameValue(name.toString())
    setDescValue(desc.toString())
    setGamesValue(games.toString())
    setBallsValue(balls.toString())
    setDisabled(true)
  }
  const saveHandler = () => {
    const type = {
      id,
      name: nameValue,
      desc: descValue,
      games: gamesValue,
      balls: ballsValue,
    }
    dispatch(editTypeGame(type))
    goBack()
  }

  return (
    <TypeGameContent
      title={disabled ? 'Просмотр игры' : 'Редактировать игру'}
      nameInputState={{ value: nameValue, onChangeText: setNameValue }}
      descInputState={{ value: descValue, onChangeText: setDescValue }}
      gamesInputState={{ value: gamesValue, onChangeText: setGamesValue }}
      ballsInputState={{ value: ballsValue, onChangeText: setBallsValue }}
      cancelHandler={cancelHandler}
      saveHandler={saveHandler}
      dangerButtonName="Отмена"
      primaryButtonName="Сохранить"
      disabled={disabled}
    />
  )
}
