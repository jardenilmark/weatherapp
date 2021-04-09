import { login } from '../../../common/auth'
import { setUserPermission } from '../../../slices/users-slice'

export const getPermission = async dispatch => {
  const hasPermission = await login()
  dispatch(setUserPermission(hasPermission))
}
