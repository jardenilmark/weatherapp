import Auth0 from 'react-native-auth0'
import { getToken, storeToken } from './storage'
import Snackbar from 'react-native-snackbar'

/* This should be in the env file. Only here for demo purposes */
const auth0 = new Auth0({
  domain: 'dev-r56ls9wo.us.auth0.com',
  clientId: 'Ze2bAb6pZug7D0AEOtxnl8J3Sn5Kb39I',
})


// Opens up auth0 universal browser and lets us login through github
export const login = async () => {
  try {
    const credentials = await auth0.webAuth.authorize({ scope: 'openid profile email' })
    const { accessToken } = credentials
    await storeToken(accessToken)
    return true
  } catch (e) {
    console.log(e)
    Snackbar.show({
      text: 'Unable to login',
      duration: Snackbar.LENGTH_LONG,
    })
    return false
  }
}

// Gets users github information based on the access token
export const getUserInfo = async () => {
  try {
    const accessToken = await getToken()
    const userInfo = await auth0.auth.userInfo({ token: accessToken })

    return userInfo
  } catch (e) {
    console.log(e)
    Snackbar.show({
      text: 'Unable to retrieve user info',
      duration: Snackbar.LENGTH_LONG,
    })
  }
}

// Clears github session if ever implemented
export const logout = async () => {
  try {
    auth0.webAuth.clearSession()
  } catch (e) {
    console.log(e)
    Snackbar.show({
      text: 'Unable to logout',
      duration: Snackbar.LENGTH_LONG,
    })
  }
}
