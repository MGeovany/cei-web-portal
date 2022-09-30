const express= require('express');
const router= express.Router();
const config= require('../lib/config');
const sql = require('mssql');
const PostulacionModule = require('../class/Postulacion')


router.get('/postulacion',async(req,res)=>{
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostulacionModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request().query(postulacion.queryGet);
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
        res.status(200).json(response.recordsets)
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

router.get('/postulacion/:id',async(req,res)=>{
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostulacionModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int,postulacion.id)
            .query(postulacion.queryGetById);
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
        res.status(200).json(response.recordsets)
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

router.post('/postulacion',async(req,res)=>{ //agregar
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostulacionModule(data);
        let pool =  await sql.connect(config);

        let response = await pool.request()
            .input('representante',sql.VarChar, postulacion.representante)
            .input('correo',sql.VarChar, postulacion.correo)
            .input('cuenta',sql.VarChar,postulacion.cuenta)
            .input('celular',sql.VarChar,postulacion.celular)
            .input('genero',sql.TinyInt,postulacion.genero)
            .input('tipo',sql.Int,postulacion.tipo)
            .input('descripcion',sql.VarChar,postulacion.descripcion)
            .input('sede',sql.Int,postulacion.sede)
            .input('redesSociales',sql.TinyInt,postulacion.redesSociales)
            .input('rubro',sql.TinyInt,postulacion.rubro)
            .input('equipoTrabajo',sql.TinyInt,postulacion.equipoTrabajo)
            .input('expectativas',sql.TinyInt,postulacion.expectativas)
            .input('estado',sql.TinyInt,1) //comienza con 1 por que es el inicio
            .query(postulacion.querySave);
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
        res.status(200).json({messaje:"Se guardo correctamente",data:data})
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

router.put('/postulacion/:id',async(req,res)=>{ //modificar
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostulacionModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int, postulacion.id)
            .input('representante',sql.VarChar, postulacion.representante)
            .input('correo',sql.VarChar, postulacion.correo)
            .input('cuenta',sql.VarChar,postulacion.cuenta)
            .input('celular',sql.VarChar,postulacion.celular)
            .input('genero',sql.TinyInt,postulacion.genero)
            .input('tipo',sql.Int,postulacion.tipo)
            .input('descripcion',sql.VarChar,postulacion.descripcion)
            .input('sede',sql.Int,postulacion.sede)
            .input('redesSociales',sql.TinyInt,postulacion.redesSociales)
            .input('rubro',sql.TinyInt,postulacion.rubro)
            .input('equipoTrabajo',sql.TinyInt,postulacion.equipoTrabajo)
            .input('expectativas',sql.TinyInt,postulacion.expectativas)
            .input('estado',sql.TinyInt,postulacion.estado)
            .input('fechaCerrado',sql.DateTime,postulacion.fechaCerrado)
            .query(postulacion.queryUpdate);
            res.status(200).json({message:"Modificado con exito",data:data})
        res.status(200).json(response)
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})
router.delete('/postulacion/:id',async(req,res)=>{ //eliminar
    try {
        let data = {...req.body,...req.params};
        let postulacion = new PostModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int,postulacion.id)
            .query(postulacion.queryDelete);
        res.status(200).json({message:"Datos han sido Eliminados"})
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

module.exports = router;