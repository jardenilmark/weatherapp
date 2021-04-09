import { createSlice } from '@reduxjs/toolkit'

type UserState = { hasPermission: boolean }

const initialState: UserState = {
  hasPermission: false,
}

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default usersSlice
