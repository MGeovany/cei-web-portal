import React, { useState } from 'react'
import '../styles/Footer.css'
import { Facebook, Instagram, LinkdIn } from '../utils/svgIcons'
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
              <a href='https://www.facebook.com/cei.ceutec'>
                <Facebook width={25} height={25} fill={'#fff'} />
              </a>
              <a href='https://www.instagram.com/ceutec_hn/'>
                <Instagram width={25} height={25} fill={'#fff'} />
              </a>
              <a href='https://www.linkedin.com/school/ceutec/'>
                <LinkdIn width={25} height={25} fill={'#fff'} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
