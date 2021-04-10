import React, { useEffect, useState } from 'react'
import WeatherScreen from '../components/WeatherScreen'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { getWeatherData } from '../../../common/weather'
import { setWeatherInfo } from '../../../slices/users-slice'
import Snackbar from "react-native-snackbar";

const WeatherScreenContainer = () => {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)
  const coordinates = useSelector((state: RootState) => state.user.coordinates)
  const weatherData = useSelector((state: RootState) => state.user.weather)

  /* Retrieves the weather data from the api and sends them to the redux store
     Inside the WeatherScreenContainer so we can pass setLoading directly */
  const getWeatherInfo = async () => {
    try {
      setLoading(true)
      const weatherData = await getWeatherData(coordinates)
      dispatch(setWeatherInfo(weatherData))
      setLoading(false)
    } catch (e) {
      /* Prevent infinite loading loop*/
      setLoading(false)
      Snackbar.show({
        text: 'Unable to retrieve weather',
      })
    }
  }

  useEffect(() => {
    getWeatherInfo()
  }, [])

  return <WeatherScreen weatherData={weatherData} isLoading={isLoading} />
}

export default WeatherScreenContainer
