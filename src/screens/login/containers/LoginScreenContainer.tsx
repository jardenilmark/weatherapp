import React, { useEffect } from 'react'
import LoginScreen from '../components/LoginScreen'
import { getPermission } from '../actions/getPermissionAction'
import { useDispatch } from 'react-redux'
import { checkAccessToken } from '../actions/checkAccessTokenAction'

const LoginScreenContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    checkAccessToken(dispatch)
  }, [])

  return <LoginScreen getPermission={() => getPermission(dispatch)} />
}

export default LoginScreenContainer
