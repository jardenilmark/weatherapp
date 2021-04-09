import AsyncStorage from '@react-native-async-storage/async-storage'
import Snackbar from 'react-native-snackbar'

// Stores the access token
export const storeToken = async value => {
  try {
    await AsyncStorage.setItem('access_token', value)
  } catch (e) {
    console.log(e)
    Snackbar.show({
      text: 'Unable to store token',
    })
  }
}

// Retrieves access token from storage
export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('access_token')
    return value
  } catch (e) {
    console.log(e)
    Snackbar.show({
      text: 'Unable to get token',
    })
  }
}

// To be used if logout is ever implemented
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('access_token')
  } catch (e) {
    console.log(e)
    Snackbar.show({
      text: 'Unable to remove token',
    })
  }
}
