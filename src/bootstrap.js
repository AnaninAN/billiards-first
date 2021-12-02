import * as Font from 'expo-font'

export const bootstrap = async () => {
  try {
    await Font.loadAsync({
      'play-regular': require('../assets/fonts/Play-Regular.ttf'),
      'play-bold': require('../assets/fonts/Play-Bold.ttf'),
    })
  } catch (e) {
    console.log('Error bootstrap', e)
  }
}
