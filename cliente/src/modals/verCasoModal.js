/* eslint-disable react/prop-types */
import React from 'react'
import { CasoTabla } from '../componentes/CasoTabla'
import { CasoTablaResponsive } from '../componentes/CasoTablaResponsive'
import { createStyles } from '@mantine/core';


const use_Styles = createStyles((theme, _params, getRef) => ({
  casosTablastyle:{
    padding:'0px',
    width:'100%',
    '@media (max-width: 1050px)': {
      display:'none'
      },
  },
  casosTablastyleR:{
    padding:'0px',
    width:'100%',
    '@media (min-width: 1050px)': {
      display:'none'
      },
  }
}));


export const verCasoModal = ({ context, id, innerProps }) => {
  
  const { classes } = use_Styles();


 return (
  <>
    <div className='add__asset__modal asset__col'>
      <div className='asset__modal__title'>
        VER
        <span style={{ color: '#e1575f' }}> CASOS DE EXITO</span>
      </div>
      <div className={classes.casosTablastyle}>
      <CasoTabla />
      </div>
      <div className={classes.casosTablastyleR}>
      <CasoTablaResponsive />
      </div>
    </div>
  </>
)
  }