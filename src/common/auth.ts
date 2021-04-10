import Auth0 from 'react-native-auth0'
import { getToken, storeToken } from './storage'

/* This should be in the env file. Only here for demo purposes */
const auth0 = new Auth0({
  domain: 'dev-r56ls9wo.us.auth0.com',
  clientId: 'Ze2bAb6pZug7D0AEOtxnl8J3Sn5Kb39I',
})

/* Opens up auth0 universal browser and lets us login through github */
export const login = async () => {
  const credentials = await auth0.webAuth.authorize({ scope: 'openid profile email' })
  const { accessToken } = credentials
  await storeToken(accessToken)
  return true
}

/* Gets users github information based on the access token */
export const getUserInfo = async () => {
  const accessToken = await getToken()
  const userInfo = await auth0.auth.userInfo({ token: accessToken })

  return userInfo
}

/* Clears github session if ever implemented */
export const logout = async () => {
  await auth0.webAuth.clearSession()
}
