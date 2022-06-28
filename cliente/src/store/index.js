import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './slices/login/loginSlice'
export const store = configureStore({
  reducer: {
    login: loginSlice
  }
})
