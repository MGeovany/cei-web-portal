import React from 'react'
import { CasoCard } from './CasoCard'
import PropTypes from 'prop-types'

export const CasoComercial = (props) => {
  const casosTec = props.casosTec
  return (
    <div>
      <div className="casos-container-section">
        <div className="casos-tec-title">COMERCIAL</div>
        <div className="casos-tec-content">
        {
          casosTec.map((caso, index) =>
          <div key={index}> <CasoCard caso={caso}/>
          </div>
          )
        }
        </div>
      </div>
    </div>
  )
}

CasoComercial.propTypes = {
  casosTec: PropTypes.string.isRequired
}
