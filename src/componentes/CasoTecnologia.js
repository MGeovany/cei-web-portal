import React from 'react'
import PropTypes from 'prop-types'
import { CasoCard } from './CasoCard'

export const CasoTecnologia = (props) => {
  const casosTec = props.casosTec

  return (
    <div>
      <div className="casos-container-section">
        <div className="casos-tec-title">TECNOLOGIA</div>
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

CasoTecnologia.propTypes = {
  casosTec: PropTypes.string.isRequired
}
