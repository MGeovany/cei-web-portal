import React from 'react'
import '../styles/PageNotFound.css'
export const PageNotFound = () => {
  const rand = Math.floor(Math.random() * (1 - 33) + 33)

  return (
    <div className='notfound'>
      <div className='notfound__container'>
        <div className='notfound__title'>
          PAGINA <span style={{ color: '#7ac678' }}> NO ENCONTRADA</span>{' '}
        </div>
        <span>404</span>
        <img src={`/assets/404/${rand}.png`} alt='notfound' />
      </div>
    </div>
  )
}
