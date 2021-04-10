import AsyncStorage from '@react-native-async-storage/async-storage'
import Snackbar from 'react-native-snackbar'

/* Stores the access token */
export const storeToken = async value => {
  await AsyncStorage.setItem('access_token', value)
}

/* Retrieves access token from storage */
export const getToken = async () => {
  const value = await AsyncStorage.getItem('access_token')
  return value
}

/* To be used if logout is ever implemented */
export const removeToken = async () => {
  await AsyncStorage.removeItem('access_token')
}
