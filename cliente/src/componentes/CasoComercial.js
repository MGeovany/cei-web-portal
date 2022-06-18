/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { CasoCard } from './CasoCard'
import PropTypes from 'prop-types'

export const CasoComercial = (props) => {
  const casosCom = props.casosCom
  return (
    <div className='casos-comercial'>
      <div className="casos-container-section">
        <div className="casos-section-title">COMERCIAL</div>
        <div className="casos-section-content">
        {
          casosCom.map((caso, index) =>
          <div key={index}> <CasoCard caso={caso}/>
          </div>
          )
        }
        </div>
      </div>
    </div>
  )
}
/*
CasoComercial.propTypes = {
  casosCom: PropTypes.string.isRequired
}
 */
