import {React } from "react";
import '../styles/QuienesSomos.css'
import { motion} from "framer-motion";





export const QuienesSomos = ({ dataHome }) => {
  return (
    <div className='quienes-somos flex'>
      <div className='section-title' >
        QUIENES <span style={{ color: '#e1575f' }}>SOMOS</span>🍃
      </div>
      <motion.div className='quienes-somos-text flex' whileInView={{ opacity: [0,0,0,0.3,0.5,0.8, 1] }}>
        <div className='quienes-somos-text-title'>
          <h1>¿QUÉ ES EL CEI?</h1>
          <div>
            <hr />
          </div>
        </div>
        <div className='quienes-somos-text-cnt'>
          {dataHome?.descripcion_quienessomos}
        </div>
      </motion.div>
    </div>
  )
}
