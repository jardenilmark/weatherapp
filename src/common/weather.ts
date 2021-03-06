/* Should be hidden in the .env file, only for demonstration purposes */
const WEATHER_API_KEY = '705c09cb20634d20797589ad15f9c701'
const baseURL = 'https://api.openweathermap.org'

export const getWeatherData = async coordinates => {
  const { latitude, longitude } = coordinates

  const weatherData = await fetch(
    `${baseURL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`,
    {
      method: 'GET',
      redirect: 'follow',
    }
  )
  const weatherDataJson = await weatherData.json()

  const { weather, main } = weatherDataJson

  return {
    description: weather[0].description,
    main: weather[0].main,
    pressure: main.pressure,
    humidity: main.humidity,
    temperature: main.temp,
  }
}
