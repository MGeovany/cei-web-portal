const express= require('express');
const router= express.Router();
const config= require('../lib/config');
const sql = require('mssql');
const crypt = require('../lib/crypt');
const PostModule = require('../class/post')

router.post('/login',async(req,res)=>{
    try {
        let data = {...req.body,...req.params};
        let pool =  await sql.connect(config);
        let hashed =  crypt.encrypt(data.contrasena);

        let response = await pool.request()
        .input('usuario',sql.VarChar,data.usuario)
        .input('contrasena',sql.VarChar,hashed)
        .query(`SELECT usuario, correo, nombre FROM usuario WHERE usuario = @usuario AND contrasena = @contrasena`);

        if (response.rowsAffected <= 0){ throw "No existe datos con esos parámetros"};
        res.status(200).json(response.recordset[0])
    } catch (e) {
        console.error(`Hay clavo tio ${e}`)
        res.status(300).json({error:`Hay clavo tio ${e}`})
    }
})

module.exports= router;