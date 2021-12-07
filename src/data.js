export const DATA_TYPE = [
  {
    id: '1-135',
    name: 'Длинная американка до 30',
    desc: 'По правилам свободной пирамиды. Штраф на полку. Первый разбой активный, остальные не обязательно',
    games: 1,
    balls: 30,
  },
  {
    id: '2-777',
    name: 'Московская пирамида',
    desc: 'Игра одним шаром. Штраф с полки. При забитии "своего" шар со стола снимает соперник',
    games: 3,
    balls: 8,
  },
]

export const DATA_PLAYER = [
  {
    id: '1',
    name: 'Андрей',
    surname: 'Ананьин',
    patronymic: 'Николаевич',
  },
  {
    id: '2',
    name: 'Александр',
    surname: 'Дехтярев',
    patronymic: 'Валерьевич',
  },
]

export const DATA_GAME = [
  {
    id: '1',
    date: '04.12.2021',
    active: true,
    table: 'Стол 5 (ТВ-стол)',
    name: 'Московская пирамида',
    games: 3,
    balls: 8,
    history: [],
    player1: {
      name: 'Андрей',
      surname: 'Ананьин',
      patronymic: 'Николаевич',
      pocketedBalls: 0,
      wonGames: 0,
    },
    player2: {
      name: 'Александр',
      surname: 'Дехтярев',
      patronymic: 'Валерьевич',
      pocketedBalls: 0,
      wonGames: 0,
    },
  },
]

export const DATA_TABLE = [
  {
    id: '1',
    name: 'Стол 3',
  },
  {
    id: '2',
    name: 'Стол 4',
  },
  {
    id: '3',
    name: 'Стол 5 (ТВ-стол)',
  },
]
