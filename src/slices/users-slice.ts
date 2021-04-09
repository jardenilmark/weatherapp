import { createSlice } from '@reduxjs/toolkit'

type UserState = {
  /* Permission referring to if user is logged in via github or not */
  hasPermission: boolean

  /* Data for users current location */
  coordinates: {
    latitude: number
    longitude: number
  }

  /* Users github information*/
  info: {
    name: string
    githubURL: string
    pictureURL: string
  }

  /* Weather data fetched from the api */
  weather: {
    temperature: number
    description: string
    main: string
    pressure: number
    humidity: number
  }
}

const initialState: UserState = {
  hasPermission: false,
  coordinates: {
    latitude: 0,
    longitude: 0,
  },
  weather: {
    temperature: 0,
    description: '',
    main: '',
    pressure: 0,
    humidity: 0,
  },
  info: {
    name: '',
    githubURL: '',
    pictureURL: '',
  },
}

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCoordinates(state, action) {
      state.coordinates = action.payload
    },
    setUserPermission(state, action) {
      state.hasPermission = action.payload
    },
    setUserInfo(state, action) {
      state.info = action.payload
    },
    setWeatherInfo(state, action) {
      state.weather = action.payload
    },
  },
})

export const { setUserCoordinates, setUserPermission, setUserInfo, setWeatherInfo } = usersSlice.actions
export default usersSlice
