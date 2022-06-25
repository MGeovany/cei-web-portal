/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { NavbarAdmin } from './NavbarAdmin'
import { useSelector } from 'react-redux'

const useAuth = () => {
  const user = useSelector((state) => state.login)
  return user && user.isLogged
}

const PrivateRoute = () => {
  console.log('user', useAuth())
  const isLogged = useAuth()
  return isLogged ? (
    <>
      <NavbarAdmin />
      <Outlet />
    </>
  ) : (
    <Navigate to='/login' />
  )
}

export default PrivateRoute
