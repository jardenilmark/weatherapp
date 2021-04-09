import { Dimensions } from 'react-native'

/* Retrieves the height and width of the device
   Placed here so no need to do Dimensions.get every time */
export const getScreenHeight = Dimensions.get('window').height
export const getScreenWidth = Dimensions.get('window').width
