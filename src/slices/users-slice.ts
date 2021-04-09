import { createSlice } from '@reduxjs/toolkit'

type UserState = {
  hasPermission: boolean
  coordinates: {
    latitude: number
    longitude: number
  }
  info: {
    name: string
    githubURL: string
    pictureURL: string
  }
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
