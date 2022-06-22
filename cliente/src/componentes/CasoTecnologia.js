/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { CasoCard } from './CasoCard'

export const CasoTecnologia = (props) => {
  const casosTec = props.casosTec

  return (
    <div className='casos-tecnologia'>
      <div className='casos-container-section'>
        <div className='casos-section-title'>TECNOLOGIA</div>
        <div className='casos-section-content slides'>
          {casosTec.map((caso, index) => (
            <div key={index}>
              <CasoCard caso={caso} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* CasoTecnologia.propTypes = {
  casosTec: PropTypes.array.isRequired
}
 */
