import { getLocation } from '../../../common/location'
import Snackbar from 'react-native-snackbar'
import { setUserCoordinates } from '../../../slices/users-slice'

export const getCurrentLocation = async dispatch => {
  const coordinates = await getLocation()
  dispatch(setUserCoordinates(coordinates))
  Snackbar.show({
    text: `Latitude: ${coordinates.latitude}, Longitude: ${coordinates.longitude}`,
    duration: Snackbar.LENGTH_LONG,
  })

  return coordinates
}
