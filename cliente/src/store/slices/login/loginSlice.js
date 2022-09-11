// login slice

import { createSlice } from '@reduxjs/toolkit'

var CryptoJS = require("crypto-js");
const key = 'CEI2022'
const maxMinutesSession = 15

let dataSession = {
  'expira': '',
  'usuario': '',
  'correo': '',
  'nombre': ''
};

export const getSession = () => {
  let session = localStorage.getItem("SESSION");
  if(session){
    var bytes  = CryptoJS.AES.decrypt(session, key);
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
  dataSession.expira = new Date().toLocaleString();
  var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(dataSession), key).toString();
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
    }else{
      let session = getSession();
      dataSession.usuario = session.usuario;
      dataSession.correo = session.correo;
      dataSession.nombre = session.nombre;
    }
  }, 1000);
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
    isLogged: validateLogged()
  },
  reducers: {
    login: (state, action) => {
      dataSession.usuario = action.payload.usuario;
      dataSession.correo = action.payload.correo;
      dataSession.nombre = action.payload.nombre;
      state.isLogged = true;
      newSession();
    },
    logout: (state, action) => {
      dataSession.usuario = '';
      dataSession.correo = '';
      dataSession.nombre = '';
      state.isLogged = false;
      removeSession();
    }
  }
});

export const { login, logout, isAuth } = loginSlice.actions

export const selectUser = (state) => state.user.usuario
export default loginSlice.reducer
