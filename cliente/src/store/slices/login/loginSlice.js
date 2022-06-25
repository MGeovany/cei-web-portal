// login slice

import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    password: '',
    isLogged: true
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username
    },
    logout: (state, action) => {
      state.username = ''
      state.password = ''
      state.isLogged = false
    }
  }
})

export const { login, logout } = loginSlice.actions

export const selectUser = (state) => state.user.username
export default loginSlice.reducer
