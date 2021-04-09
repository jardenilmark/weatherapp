import React, { useEffect, useState } from 'react'
import LandingScreen from '../components/LandingScreen'
import { getCurrentLocation } from '../actions/getCurrentLocationAction'
import { useDispatch, useSelector } from 'react-redux'
import { setGithubInfo } from '../actions/setGithubInfo'
import { RootState } from '../../../store'

const LandingContainer = () => {
  const dispatch = useDispatch()
  const coordinates = useSelector((state: RootState) => state.user.coordinates)

  useEffect(() => {
    setGithubInfo(dispatch)
    getCurrentLocation(dispatch)
  }, [])

  return <LandingScreen getCurrentLocation={() => getCurrentLocation(dispatch)} coordinates={coordinates} />
}

export default LandingContainer
