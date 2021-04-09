import { getToken } from '../../../common/storage'
import { setUserPermission } from '../../../slices/users-slice'

export const checkAccessToken = async dispatch => {
  const token = await getToken()
  if (token) {
    dispatch(setUserPermission(true))
  } else {
    dispatch(setUserPermission(false))
  }
}
