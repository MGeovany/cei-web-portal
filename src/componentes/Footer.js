import React from 'react'
import '../styles/Footer.css'
import { Facebook, Instagram, LinkdIn } from '../utils/svgIcons'

export const Footer = () => {
  return (
    <div>
      <div className='footer flex'>
        <div className='footer-title'>
          <span style={{ color: '#7AC678' }}>CEI</span> de CEUTEC
        </div>
        <div className='footer-txt'>
          Centro de Emprendimiento e Innovacion<br/>
          CEUTEC | Centro Universitario Tecnologico
        </div>
        <div className='footer-links'>
          <Facebook width={24} height={24} fill={'#ffff'}/>
          <Instagram width={24} height={24} className="cursor-pointer" fill={'#ffff'}/>
          <LinkdIn width={24} height={24} fill={'#ffff'}/>
        </div>

        <div className='time-local'>
        <hr/>
          SPS, <span style={ { color: '#3b8fb0' } }>Honduras</span><br/>
          2022
        </div>
      </div>

    </div>
  )
}
