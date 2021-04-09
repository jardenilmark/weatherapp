import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LandingScreen from '../components/LandingScreen'

import { RootState } from '../../../store'
import { getUserInfo } from '../../../common/auth'
import { getLocation } from '../../../common/location'
import { setUserCoordinates, setUserInfo } from '../../../slices/users-slice'

const LandingContainer = () => {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)
  const coordinates = useSelector((state: RootState) => state.user.coordinates)

  const getCurrentLocation = async () => {
    const coordinates = await getLocation()
    dispatch(setUserCoordinates(coordinates))
  }

  const setGithubInfo = async () => {
    const githubInfo = await getUserInfo()
    const { nickname, name, picture } = githubInfo

    dispatch(
      setUserInfo({
        name,
        githubURL: `https://github.com/${nickname}`,
        pictureURL: picture,
      })
    )
  }

  useEffect(() => {
    const onStart = async () => {
      setLoading(true)
      await setGithubInfo()
      await getCurrentLocation()
      setLoading(false)
    }

    onStart()
  }, [])

  return (
    <LandingScreen
      getCurrentLocation={() => getCurrentLocation()}
      coordinates={coordinates}
      isLoading={isLoading}
      setLoading={setLoading}
    />
  )
}

export default LandingContainer
