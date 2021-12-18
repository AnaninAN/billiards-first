export class MyFunc {
  static surnameNP(player) {
    const { name, surname, patronymic } = player
    return `${surname} ${name.charAt(0)}.${patronymic.charAt(0)}.`
  }
}
