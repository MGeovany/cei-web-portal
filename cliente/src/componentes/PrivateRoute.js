/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { NavbarAdmin } from './NavbarAdmin'
import { AlertSessionModal } from './AlertSessionModal'
import { useSelector } from 'react-redux'


const useAuth = () => {
  const user = useSelector((state) => state.login)
  return user.isLogged;
}

const PrivateRoute = () => {
  return useAuth() ? (
    <>
      <NavbarAdmin />
      <Outlet />
      <AlertSessionModal />
    </>
  ) : (
    <Navigate to='/login' />
  )
}

export default PrivateRoute;
