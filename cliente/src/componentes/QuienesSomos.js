import React from 'react'
import '../styles/QuienesSomos.css'
import { motion } from "framer-motion"

export const QuienesSomos = () => {
  return (
    <div className='quienes-somos flex'>
      <motion.div className='section-title' whileInView={{ scale: [1.0, 1.3, 1.0] }}>
        QUIENES <span style={{ color: '#e1575f' }}>SOMOS</span>🍃
      </motion.div>
      <motion.div className='quienes-somos-text flex'
      whileInView={{ x: [-450, 0] }}
      >
        <div className='quienes-somos-text-title'>
          <h1>¿QUÉ ES EL CEI?</h1>
          <div>
            <hr />
          </div>
        </div>
        <div className='quienes-somos-text-cnt'>
          Es un espacio{' '}
          <span className='b' style={{ color: '#e1575f' }}>
            creativo
          </span>{' '}
          ideal para que emprendedores, soñadores y personas innovadoras se
          conecten y a través de procesos de incubación y aceleración puedan{' '}
          <span className='b' style={{ color: '#4166DE' }}>
            hacer realidad sus sueños.
          </span>
          <br />
          <br />
          Es un espacio en donde mentores certificados ayudan a estudiantes a{' '}
          <span className='b' style={{ color: '#d05c5f' }}>
            crecer con sus proyectos,
          </span>{' '}
          a que no se desmotiven y sigan luchando por sus sueños, y en este
          mismo espacio{' '}
          <span className='b' style={{ color: '#4166DE' }}>
            se capacitan constantemente{' '}
          </span>
          desde habilidades blandas, hasta el aprendizaje de las metodologías
          más avanzadas para emprender.
        </div>
      </motion.div>
    </div>
  )
}
