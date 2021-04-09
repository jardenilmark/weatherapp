import { getLocation } from '../../../common/location'
import { setUserCoordinates } from '../../../slices/users-slice'
import Snackbar from 'react-native-snackbar'

export const setLocation = async dispatch => {
  const coordinates = await getLocation()
  dispatch(setUserCoordinates(coordinates))
}
