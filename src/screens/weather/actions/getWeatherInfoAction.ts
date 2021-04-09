import { getWeatherData } from '../../../common/weather'
import { setWeatherInfo } from '../../../slices/users-slice'

export const getWeatherInfo = async (dispatch, coordinates) => {
  const weatherData = await getWeatherData(coordinates)
  dispatch(setWeatherInfo(weatherData))
}
