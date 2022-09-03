/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { useSelector } from 'react-redux'

const useAuth = () => {
  const user = useSelector((state) => state.login)
  return user && user.isLogged
}

const PublicRoute = () => {
  //console.log('user', useAuth())
  const isLogged = useAuth()
  return isLogged ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to='/login' />
  )
}

export default PublicRoute
