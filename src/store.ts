import { configureStore } from '@reduxjs/toolkit'
import user from './slices/users-slice'

const store = configureStore({ reducer: user.reducer })

export default store
