import React from 'react'
import '../styles/Footer.css'
import { Facebook, Instagram, LinkdIn } from '../utils/svgIcons'

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer flex'>
          <div className='footer-title'>
            <span>CEI</span> de CEUTEC
          </div>
          <div className='footer-txt'>
            Centro de Emprendimiento e Innovación
            <br />
            CEUTEC | Centro Universitario Tecnologico
          </div>
          <div className='footer-links'>
            <a
              href='https://www.facebook.com/CEI.CEUTEC/'
              target='_blank'
              rel='noreferrer'
            >
              <Facebook width={24} height={24} fill={'#ffff'} />
            </a>
            <a
              href='https://www.instagram.com/vida_estudiantil_ceutec/'
              target='_blank'
              rel='noreferrer'
            >
              <Instagram
                width={24}
                height={24}
                className='cursor-pointer'
                fill={'#ffff'}
              />
            </a>
            <a
              href='https://www.linkedin.com/school/ceutec/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkdIn width={24} height={24} fill={'#ffff'} />
            </a>
          </div>

          <div className='time-local'>
            <hr />
            SPS, <span style={{ color: '#3b8fb0' }}>Honduras</span>
            <br />
            2022
          </div>
        </div>
      </footer>
    </div>
  )
}
