/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { useSelector } from 'react-redux'

const useAuth = () => {
  const user = useSelector((state) => state.login)
  return user.isLogged
}

const PublicRoute = () => {
  return useAuth() ? (
    <Navigate to='/admin' />
  ) : (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default PublicRoute
