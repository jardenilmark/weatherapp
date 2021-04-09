import React, { useEffect, useState } from 'react'
import LoginScreen from '../components/LoginScreen'
import { getPermission } from '../actions/getPermissionAction'
import { useDispatch } from 'react-redux'
import { checkAccessToken } from '../actions/checkAccessTokenAction'
import { getToken } from '../../../common/storage'
import { setUserPermission } from '../../../slices/users-slice'

const LoginScreenContainer = () => {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)

  const checkAccessToken = async () => {
    setLoading(true)
    const token = await getToken()
    if (token) {
      dispatch(setUserPermission(true))
    } else {
      dispatch(setUserPermission(false))
    }
    setLoading(false)
  }

  useEffect(() => {
    checkAccessToken()
  }, [])

  return <LoginScreen getPermission={() => getPermission(dispatch)} isLoading={isLoading} />
}

export default LoginScreenContainer
