import { login } from '../../../common/auth'
import { setUserPermission } from '../../../slices/users-slice'

// Separated since we dont need to pass any local state here
export const getPermission = async dispatch => {
  const hasPermission = await login()
  dispatch(setUserPermission(hasPermission))
}
