import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import _ from 'lodash'

import { getToken } from '../../../common/storage'
import LoginScreen from '../components/LoginScreen'
import { setUserPermission } from '../../../slices/users-slice'
import Snackbar from 'react-native-snackbar'
import { login } from '../../../common/auth'

const LoginScreenContainer = () => {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)

  /* Inside the container so we can pass the loading parameter directly
   Responsible for checking if user has a github access token */
  const checkAccessToken = async () => {
    try {
      setLoading(true)
      const token = await getToken()
      dispatch(setUserPermission(!_.isEmpty(token)))
      setLoading(false)
    } catch (e) {
      /* Prevent infinite loading loop*/
      dispatch(setUserPermission(false))
      setLoading(false)
      Snackbar.show({
        text: 'Unable to retrieve token',
      })
    }
  }

  const getPermission = async () => {
    try {
      setLoading(true)
      const hasPermission = await login()
      dispatch(setUserPermission(hasPermission))
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.log(e)
      Snackbar.show({
        text: 'Unable to login',
        duration: Snackbar.LENGTH_LONG,
      })
    }
  }

  useEffect(() => {
    checkAccessToken()
  }, [])

  return <LoginScreen getPermission={getPermission} isLoading={isLoading} />
}

export default LoginScreenContainer
