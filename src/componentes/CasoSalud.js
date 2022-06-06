import React from 'react'
import PropTypes from 'prop-types'
import { CasoCard } from './CasoCard'

export const CasoSalud = (props) => {
  const casosTec = props.casosTec
  return (
    <div>
      <div className="casos-container-section">
        <div className="casos-tec-title">SALUD</div>
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

CasoSalud.propTypes = {
  casosTec: PropTypes.string.isRequired
}
