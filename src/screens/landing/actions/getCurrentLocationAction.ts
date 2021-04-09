import { getLocation } from '../../../common/location'
import { setUserCoordinates } from '../../../slices/users-slice'

export const getCurrentLocation = async dispatch => {
  const coordinates = await getLocation()
  dispatch(setUserCoordinates(coordinates))

  return coordinates
}
