import { Alert } from 'react-native'

export class MyFunc {
  static surnameNP(player) {
    const { name, surname, patronymic } = player
    return `${surname} ${name.charAt(0)}.${patronymic.charAt(0)}.`
  }

  static gameHistory(history) {
    return history.join(', ')
  }

  static changeGame(change) {
    const { oper, ...rest } = change
    const { games, balls } = rest
    let pocketedBallsP1 = rest.player1.pocketedBalls
    let wonGamesP1 = rest.player1.wonGames
    let pocketedBallsP2 = rest.player2.pocketedBalls
    let wonGamesP2 = rest.player2.wonGames
    let history = rest.history

    let endGame

    const alert = (player) =>
      Alert.alert(`Встречу выйграл ${MyFunc.surnameNP(player)}`)

    switch (oper) {
      case '+p1': {
        if (++pocketedBallsP1 === balls) {
          history.push(`${pocketedBallsP1}:${pocketedBallsP2}`)
          pocketedBallsP1 = 0
          pocketedBallsP2 = 0
          if (++wonGamesP1 === games) {
            endGame = { active: false }
            alert(rest.player1)
          }
        }

        break
      }
      case '+p2': {
        if (++pocketedBallsP2 === balls) {
          history.push(`${pocketedBallsP1}:${pocketedBallsP2}`)
          pocketedBallsP2 = 0
          pocketedBallsP1 = 0
          if (++wonGamesP2 === games) {
            endGame = { active: false }
            alert(rest.player2)
          }
        }

        break
      }
      case '-p1': {
        --pocketedBallsP1

        break
      }
      case '-p2': {
        --pocketedBallsP2

        break
      }
      default:
        break
    }

    const newChange = {
      history,
      player1: {
        ...rest.player1,
        pocketedBalls: pocketedBallsP1,
        wonGames: wonGamesP1,
      },
      player2: {
        ...rest.player2,
        pocketedBalls: pocketedBallsP2,
        wonGames: wonGamesP2,
      },
    }

    return { ...rest, ...newChange, ...endGame }
  }
}
