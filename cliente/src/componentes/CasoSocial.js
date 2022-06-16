/* eslint-disable react/prop-types */
import React from 'react'
import { CasoCard } from './CasoCard'

export const CasoSocial = (props) => {
  const casosSoc = props.casosSoc
  return (
    <div className='casos-social'>
      <div className='casos-container-section'>
        <div className='casos-section-title'>SOCIAL</div>
        <div className='casos-section-content'>
          {casosSoc.map((caso, index) => (
            <div key={index}>
              {' '}
              <CasoCard caso={caso} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
/*
CasoSocial.propTypes = {
  casosSoc: PropTypes.array.isRequired
}
 */
