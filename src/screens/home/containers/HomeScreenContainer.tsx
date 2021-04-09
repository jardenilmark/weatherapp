import React, { useEffect } from 'react'
import HomeScreen from '../components/HomeScreen'
import { getCurrentLocation } from '../actions/getCurrentLocationAction'
import { useDispatch, useSelector } from 'react-redux'
import { setGithubInfo } from '../actions/setGithubInfo'
import { RootState } from '../../../store'

const HomeContainer = () => {
  const dispatch = useDispatch()
  const coordinates = useSelector((state: RootState) => state.user.coordinates)

  useEffect(() => {
    setGithubInfo(dispatch)
    getCurrentLocation(dispatch)
  }, [])

  return <HomeScreen getCurrentLocation={() => getCurrentLocation(dispatch)} coordinates={coordinates} />
}

export default HomeContainer
