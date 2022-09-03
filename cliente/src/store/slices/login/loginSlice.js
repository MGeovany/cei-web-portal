// login slice

import { createSlice } from '@reduxjs/toolkit'

const maxMinutesSession = 15;


const getMinutesSession = () => {
  var startSession = new Date(localStorage.getItem("SESSION"));
  var now = new Date();
  return (now.getTime() - startSession.getTime())/ 1000 / 60;
}

export const newSession = () => {
  localStorage.setItem("SESSION", new Date().toLocaleString());
  watchSession();
}

export const removeSession = () => {
  localStorage.removeItem("SESSION");
}

const watchSession = () => {
  setTimeout(() => {
    // console.log('minutes:' + getMinutesSession());
    if(!validateLogged()){
      alertSession();
    }
  }, 25000);
}

const alertSession = () => {
  document.getElementById("alertSessionModalButton").click();
}

const validateLogged = () => {
  const isLogged = getMinutesSession() > maxMinutesSession ? false : true;
  isLogged ? watchSession() : removeSession();
  return isLogged;
}

export const loginSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    password: '',
    isLogged: validateLogged()
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      // conexion con el endpoint
      state.isLogged = true;
      newSession();
    },
    logout: (state, action) => {
      state.email = '';
      state.password = '';
      state.isLogged = false;
      removeSession();
    }
  }
});

export const { login, logout, isAuth } = loginSlice.actions

export const selectUser = (state) => state.user.email
export default loginSlice.reducer
