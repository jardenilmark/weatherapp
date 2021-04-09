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
}

const initialState: UserState = {
  hasPermission: false,
  coordinates: {
    latitude: 0,
    longitude: 0,
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
  },
})

export const { setUserCoordinates, setUserPermission, setUserInfo } = usersSlice.actions
export default usersSlice
