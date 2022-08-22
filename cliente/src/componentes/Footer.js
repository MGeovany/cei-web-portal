import React, { useState } from 'react'
import '../styles/Footer.css'
import { Facebook, Instagram, LinkdIn } from '../utils/svgIcons'
import {
  IconBrandTelegram,
  IconBrandInstagram,
  IconBrandFacebook
} from '@tabler/icons'
import { Link } from 'react-router-dom'
export const Footer = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <footer>
        <div className='footer flex'>
          <div></div>
          <hr />
          <div className='footer-content flex'>
            <Link to={toggle ? '/admin' : '/'}>
              <div
                className='footer-content-left'
                onClick={() => setToggle(!toggle)}
              >
                2022, CEUTEC | Centro Universitario Tecnológico
              </div>
            </Link>
            <div className='footer-content-right'>
              <span>Redes Sociales:</span>
              <a href='https://www.instagram.com/ceutec_hn/'>
                <IconBrandInstagram fill='white' />
              </a>
              <a href='https://www.linkedin.com/school/ceutec/'>
                <IconBrandTelegram fill='white' />
              </a>
              <a href='https://www.facebook.com/cei.ceutec'>
                <IconBrandFacebook color='white' width={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
