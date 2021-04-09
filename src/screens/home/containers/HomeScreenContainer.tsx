import React from 'react'
import HomeScreen from '../components/HomeScreen'
import { getCurrentLocation } from '../actions/getCurrentLocationAction'
import { useDispatch } from 'react-redux'

const HomeContainer = () => {
  const dispatch = useDispatch()
  return <HomeScreen getCurrentLocation={() => getCurrentLocation(dispatch)} />
}

export default HomeContainer
