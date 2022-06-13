/* eslint-disable react/prop-types */
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
  const user = { loggedIn: true }
  return user && user.loggedIn
}

const PrivateRoute = () => {
  const isLogged = useAuth()
  return (
    isLogged ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRoute
