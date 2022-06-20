import React from 'react'
import '../styles/NuestroEquipo.css'

export const NuestroEquipo = () => {
  return (
    <div>
      <div className="nuestro-equipo flex">
        <div className="section-title">NUESTRO EQUIPO🏆</div>
        <div className="nuestro-equipo-cards flex">

          <div className="nuestro-equipo-card">
            <div className="card-img">
            <img src='/assets/team/Rectángulo 47.png' alt="Jhon" />
            </div>
            <div className="card-name">
              <h2>Jhon Doe</h2>
            </div>
            <div className="card-cargo">
              <p>Save hundreds of admin hours by reducing back and forth</p>
              <hr />
              <div className="card-read-more">
                <span style={{ color: '#4A79CB' }}>Leer Mas</span>
              </div>
            </div>
          </div>

          <div className="nuestro-equipo-card">
            <div className="card-img">
              <img src='/assets/team/Rectángulo 45.png' alt="Eliza" />
            </div>
            <div className="card-name">
              <h2>Eliza Damian</h2>
            </div>
            <div className="card-cargo">
              <p>Save hundreds of admin hours by reducing back and forth</p>
              <hr />
              <div className="card-read-more">
                <span style={{ color: '#4A79CB' }}>Leer Mas</span>
              </div>
            </div>
          </div>

          <div className="nuestro-equipo-card">
            <div className="card-img">
              <img src='/assets/team/Rectángulo 43.png' alt="Alberto" />
            </div>
            <div className="card-name">
              <h2>Alberto Martinez</h2>
            </div>
            <div className="card-cargo">
              <p>Save hundreds of admin hours by reducing back and forth</p>
              <hr />
              <div className="card-read-more">
                <span style={{ color: '#4A79CB' }}>Leer Mas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
