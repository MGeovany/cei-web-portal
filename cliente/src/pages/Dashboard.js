import React from 'react'
import { NavbarAdmin } from '../componentes/NavbarAdmin'

export const Dashboard = () => {
  return (
    <>
      <NavbarAdmin />
      <div
        style={{
          height: '100vh',
          padding: '150px 0',
          fontSize: '5rem',
          fontFamily: 'Sen',
          color: '#333'
        }}
      >
        Dashboard
      </div>
    </>
  )
}
