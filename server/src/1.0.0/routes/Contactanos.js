const express = require('express');
const router = express.Router();
const config = require('../lib/config');
const sql = require('mssql');
const ContactanosModule = require('../class/Contactanos')

router.get('/contactanos',async(req,res)=>{// get all
    try {
        let data = {...req.body,...req.params}
        let pool= await sql.connect(config);
        let contactanos = new ContactanosModule(data);
        let response = await pool.request().query(contactanos.queryGet)
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"}
        res.status(200).json(response.recordset);
    } catch (error) {
        console.error(error);
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }

})

router.post('/contactanos', async(req,res)=>{ //agregar
    try {
        let data = {...req.body,...req.params}
        let pool = await sql.connect(config);
        let contactanos = new ContactanosModule(data);
        let result = await pool.request()
        .input('nombre',sql.VarChar(50),contactanos.nombre)
        .input('email',sql.VarChar(70),contactanos.email)
        .input('comentario',sql.VarChar(300),contactanos.comentario)
        .input('telefono',sql.VarChar(20),contactanos.telefono)
        .query(contactanos.querySave);

        if(result.rowsAffected <= 0){throw "No existe datos con esos parametros"};
        res.status(200).json({message: 'Agregado correctamente'});

    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

router.get('/contactanos/:id',async(req,res)=>{//get por id
    try {
        let data = {...req.body,...req.params}
        let pool= await sql.connect(config);
        let contactanos = new ContactanosModule(data);
        let response = await pool.request()
        .input('id',sql.Int,req.params.id)
        .query(contactanos.queryGetById)
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"}
        res.status(200).json(response.recordset);
    } catch (error) {
        console.error(error);
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }

})

router.put('/contactanos/:id', async(req,res) =>{//modificar por id
    try {
        
        let data = {...req.body,...req.params};
        let contactanos = new ContactanosModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
        .input('id',sql.Int,contactanos.id)
        .input('nombre',sql.VarChar(50),contactanos.nombre)
        .input('email',sql.VarChar(70),contactanos.email)
        .input('comentario',sql.VarChar(300),contactanos.comentario)
        .input('telefono',sql.VarChar(20),contactanos.telefono)
        .query(contactanos.queryUpdate);

        res.status(200).json({message:"Modificado exitosamente"})
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

router.delete('/contactanos/:id',async(req,res)=>{ //eliminar
    try {
        let data = {...req.body,...req.params};
        let contactanos = new ContactanosModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int,contactanos.id)
            .query(contactanos.queryDelete);
        res.status(200).json({message:"Datos han sido Eliminados"})
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
  })
  
  
  module.exports = router;