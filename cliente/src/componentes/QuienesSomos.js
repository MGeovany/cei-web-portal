import React, { useEffect } from 'react'
import '../styles/QuienesSomos.css'
import Aos from "aos";
import "aos/dist/aos.css";



export const QuienesSomos = () => {
  useEffect(()=>{
    Aos.init({duration: 3000});
  }, []);
  return (
    <div>
      <div data-aos="fade-up" className='quienes-somos flex'>
        <div data-aos="fade-up" className='section-title'>
          QUIENES <span style={{ color: '#e1575f' }}>SOMOS</span>🍃
        </div>
        <div data-aos="fade-up" className='quienes-somos-text flex'>
          <div data-aos="fade-up" className='quienes-somos-text-title'>
            <h1>¿QUÉ ES EL CEI?</h1>
            <div>
              <hr />
            </div>
          </div>
          <div data-aos="fade-up" className='quienes-somos-text-cnt'>
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
        </div>
      </div>
    </div>
  )
}
