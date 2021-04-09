import React, { useEffect } from 'react'
import WeatherScreen from '../components/WeatherScreen'
import { getWeatherInfo } from '../actions/getWeatherInfoAction'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'

const WeatherScreenContainer = () => {
  const dispatch = useDispatch()
  const coordinates = useSelector((state: RootState) => state.user.coordinates)
  const weatherData = useSelector((state: RootState) => state.user.weather)

  useEffect(() => {
    getWeatherInfo(dispatch, coordinates)
  }, [])

  return <WeatherScreen weatherData={weatherData} />
}

export default WeatherScreenContainer
