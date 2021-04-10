import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LandingScreen from '../components/LandingScreen'

import { RootState } from '../../../store'
import { getUserInfo } from '../../../common/auth'
import { getLocation } from '../../../common/location'
import { setUserCoordinates, setUserInfo } from '../../../slices/users-slice'
import Snackbar from 'react-native-snackbar'

const LandingContainer = () => {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)
  const coordinates = useSelector((state: RootState) => state.user.coordinates)
  const { pictureURL, name, githubURL } = useSelector((state: RootState) => state.user.info)

  /* Gets users current location and sends it to the redux store*/
  const getCurrentLocation = async () => {
    try {
      const coordinates = await getLocation()
      dispatch(setUserCoordinates(coordinates))
    } catch (e) {
      console.log(e)
      Snackbar.show({
        text: e.message,
        duration: Snackbar.LENGTH_LONG,
      })
    }
  }

  /* Retrieves users github information based on the token and sends to the redux store */
  const setGithubInfo = async () => {
    try {
      const githubInfo = await getUserInfo()
      const { nickname, name, picture } = githubInfo

      dispatch(
        setUserInfo({
          name,
          githubURL: `https://github.com/${nickname}`,
          pictureURL: picture,
        })
      )
    } catch (e) {
      console.log(e)
      Snackbar.show({
        text: 'Unable to retrieve user info',
        duration: Snackbar.LENGTH_LONG,
      })
    }
  }

  useEffect(() => {
    const onStart = async () => {
      try {
        setLoading(true)
        await setGithubInfo()
        await getCurrentLocation()
        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    }

    onStart()
  }, [])

  return (
    <LandingScreen
      getCurrentLocation={() => getCurrentLocation()}
      pictureURL={pictureURL}
      name={name}
      githubURL={githubURL}
      coordinates={coordinates}
      isLoading={isLoading}
      setLoading={setLoading}
    />
  )
}

export default LandingContainer
