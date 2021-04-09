import { configureStore } from '@reduxjs/toolkit'
import user from './slices/users-slice'

const store = configureStore({
  reducer: {
    user: user.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store
