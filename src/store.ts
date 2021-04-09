import { configureStore } from '@reduxjs/toolkit'
import user from './slices/users-slice'

/* object containing all of redux's top reducers */
const store = configureStore({
  reducer: {
    user: user.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store
