const express= require('express');
const router= express.Router();
const config= require('../lib/config');
const sql = require('mssql');
const UsuarioModule = require('../class/Usuario')
const crypt = require('../lib/crypt');
router.post('/usuario', async (req, res) => {//agregar
   try {
    let data = {...req.body,...req.params}
    let pool = await sql.connect(config);
    let usuario = new UsuarioModule(data);
    let result = await pool.request()
        .input('usuario',sql.VarChar,usuario.usuario) 
        .input('nombre',sql.VarChar,usuario.nombre) 
        .input('contrasena',sql.VarChar,usuario.contrasena) 
        .input('correo',sql.VarChar,usuario.correo) 
        .query(usuario.querySave);
    if (result.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
    res.status(200).json({message:"Usuario creado correctamente"});
   } catch (error) {
        console.error(error)
        res.status(300).json({error:`Hay clavo tio ${error}`})
   }
})


router.get('/usuario',async(req,res)=>{// get all
    try {
        let data = {...req.body,...req.params}
        let pool= await sql.connect(config);
        let usuario = new UsuarioModule(data);
        let response = await pool.request().query(usuario.queryGet)
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"}
        res.status(200).json(response.recordset);
    } catch (error) {
        console.error(error);
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }

})

router.get('/usuario/:id',async(req,res)=>{//get por id
    try {
        let data = {...req.body,...req.params}
        let pool= await sql.connect(config);
        let usuario = new UsuarioModule(data);
        let response = await pool.request()
        .input('id',sql.Int,req.params.id)
        .query(usuario.queryGetByID)
        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"}
        res.status(200).json(response.recordset);
    } catch (error) {
        console.error(error);
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }

})

router.put('/usuario/:id', async(req,res) =>{//modificar por id
    try {
        
        let data = {...req.body,...req.params};
        let usuario = new UsuarioModule(data);
        let pool =  await sql.connect(config);

        let response = await pool.request()
            .input('id',sql.Int,usuario.id)
            .input('usuario',sql.VarChar,usuario.usuario)
            .input('nombre',sql.VarChar,usuario.nombre) 
            .input('contrasena',sql.VarChar,usuario.contrasena)
            .input('correo',sql.VarChar,usuario.correo)
            .query(data.contrasena? usuario.queryUpdateWithPassword:usuario.queryUpdate);

        res.status(200).json({data:data,message:"Modificado exitosamente"})
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

router.delete('/usuario/:id',async(req,res)=>{ //eliminar
    try {
        let data = {...req.body,...req.params};
        let usuario = new UsuarioModule(data);
        let pool =  await sql.connect(config);
        let response = await pool.request()
            .input('id',sql.Int,usuario.id)
            .query(usuario.queryDelete);
       
        res.status(200).json({message:"Datos han sido Eliminados"})
    } catch (error) {
        console.error(`Hay clavo tio ${error}`)
        res.status(300).json({error:`Hay clavo tio ${error}`})
    }
})

module.exports = router;