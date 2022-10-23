/* eslint-disable react/prop-types */
import React from 'react'
import { CasoTabla } from '../componentes/CasoTabla'
import { createStyles } from '@mantine/core';


const use_Styles = createStyles((theme, _params, getRef) => ({
  casosTablastyle:{
    padding:'0px',
    width:'100%'
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
    </div>
  </>
)
  }