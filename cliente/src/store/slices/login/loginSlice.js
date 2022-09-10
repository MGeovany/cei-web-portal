// login slice

import { createSlice } from '@reduxjs/toolkit'

var CryptoJS = require("crypto-js");
const maxMinutesSession = 15;

const getSession = () => {
  let session = localStorage.getItem("SESSION");
  if(session){
    var bytes  = CryptoJS.AES.decrypt(session, 'secret key 123');
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
  return null;
}

const getMinutesSession = () => {
  let session = getSession();
  if(session){
    var startSession = new Date(session.expira);
    var now = new Date();
    return (now.getTime() - startSession.getTime())/ 1000 / 60;
  }
  return null;
}

export const newSession = () => {
  let data = {
    'expira': new Date().toLocaleString(),
    'usuario': 'David Torres',
    'id': 123
  };
  var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
  localStorage.setItem("SESSION", ciphertext);
  watchSession();
}

export const removeSession = () => {
  localStorage.removeItem("SESSION");
}

const watchSession = () => {
  setTimeout(() => {
    if(!validateLogged()){
      alertSession();
    }
  }, 25000);
}

const alertSession = () => {
  let modal = document.getElementById("alertSessionModalButton");
  if(modal){
    modal.click();
  }
}

const validateLogged = () => {
  let minutesSession = getMinutesSession();
  const isLogged = (minutesSession > maxMinutesSession) || minutesSession == null ? false : true;
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
