import React from 'react'
import PropTypes from 'prop-types'
import { CasoCard } from './CasoCard'

export const CasoSalud = (props) => {
  const casosSal = props.casosSal
  return (
    <div className='casos-tecnologia'>
    <div className="casos-container-section">
      <div className="casos-section-title">SALUD</div>
      <div className="casos-section-content">
        {
          casosSal.map((caso, index) =>
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
  casosSal: PropTypes.array.isRequired
}
