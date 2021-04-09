import React, { useEffect } from 'react'
import HomeScreen from '../components/HomeScreen'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from '../actions/setLocation'
import { RootState } from '../../../store'

const HomeContainer = () => {
  const dispatch = useDispatch()
  const { coordinates } = useSelector((state: RootState) => state.user)

  console.log(coordinates)

  useEffect(() => {
    setLocation(dispatch)
  }, [])

  return <HomeScreen coordinates={coordinates} />
}

export default HomeContainer
