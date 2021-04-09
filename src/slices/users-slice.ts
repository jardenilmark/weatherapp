import { createSlice } from '@reduxjs/toolkit'

type UserState = {
  hasPermission: boolean
  coordinates: {
    latitude: number
    longitude: number
  }
}

const initialState: UserState = {
  hasPermission: false,
  coordinates: {
    latitude: 0,
    longitude: 0,
  },
}

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCoordinates(state, action) {
      state.coordinates = action.payload
    },
  },
})

export const { setUserCoordinates } = usersSlice.actions
export default usersSlice
