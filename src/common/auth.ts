import Auth0 from 'react-native-auth0'
import { storeToken } from './storage'
import Snackbar from 'react-native-snackbar'

/* This should be in the env file. Only here for demo purposes */
const auth0 = new Auth0({
  domain: 'dev-r56ls9wo.us.auth0.com',
  clientId: 'Ze2bAb6pZug7D0AEOtxnl8J3Sn5Kb39I',
})

export const login = async () => {
  try {
    const credentials = await auth0.webAuth.authorize({ scope: 'openid profile email' })
    const { accessToken } = credentials
    await storeToken(accessToken)
    return true
  } catch (e) {
    console.log(e)
    Snackbar.show({
      text: 'Unable to Login',
      duration: Snackbar.LENGTH_LONG,
    })
    return false
  }
}

export const logout = async () => {
  try {
    auth0.webAuth.clearSession()
  } catch (e) {
    console.log(e)
    Snackbar.show({
      text: 'Unable to Logout',
      duration: Snackbar.LENGTH_LONG,
    })
  }
}
