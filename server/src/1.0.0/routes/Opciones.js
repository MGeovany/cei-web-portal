const express= require('express');
const router= express.Router();
const config= require('../lib/config');
const sql = require('mssql');
const Opciones = require('../class/opciones');


router.get('/opciones/lugarsede',async(req, res)=>{ // get all
    try {
        let data = {...req.body,...req.params};
        let opciones = new Opciones(data);

        let pool = await sql.connect(config);
        let response = await pool.request().query(opciones.getLugarSede);
        if(response.rowsAffected <= 0 && result.rowsAffected <= 0)
        { throw "No existe datos con esos parámetros"};
        res.status(200).json(response.recordsets[0]);

    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})


router.get('/opciones/organizador',async(req, res)=>{ // get all
  try {
      let data = {...req.body,...req.params};
      let opciones = new Opciones(data);

      let pool = await sql.connect(config);
      let response = await pool.request().query(opciones.getOrganizador);
      if(response.rowsAffected <= 0 && result.rowsAffected <= 0)
      { throw "No existe datos con esos parámetros"};
      res.status(200).json(response.recordsets[0]);

  } catch (error) {
      console.error(`Hay clavo tio ${error}`)
      res.status(300).json({error:`Hay clavo tio ${error}`})
  }
})
module.exports= router;