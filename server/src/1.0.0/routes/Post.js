const express = require("express");
const router = express.Router();
const config = require("../lib/config");
const sql = require("mssql");
const PostModule = require("../class/post");

router.get("/post", async (req, res) => {
  try {
    let data = { ...req.body, ...req.params };
    let posts = new PostModule(data);
    let pool = await sql.connect(config);
    let response = await pool.request().query(posts.queryGetFirst10);
    if (response.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }
    res.status(200).json(response.recordsets);
  } catch (e) {
    console.error(`Hay clavo tio ${e}`);
    res.status(300).json({ error: `Hay clavo tio ${e}` });
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    let data = { ...req.body, ...req.params };
    let posts = new PostModule(data);
    let pool = await sql.connect(config);
    let response = await pool
      .request()
      .input("id", sql.Int, posts.id)
      .query(posts.queryGetById);
    if (response.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }
    res.status(200).json(response.recordsets);
  } catch (e) {
    console.error(`Hay clavo tio ${e}`);
    res.status(300).json({ error: `Hay clavo tio ${e}` });
  }
});

router.post("/post", async (req, res) => {
  //agregar
  try {
    let data = { ...req.body, ...req.params };
    let posts = new PostModule(data);
    let pool = await sql.connect(config);
    console.log(data);
    let response = await pool
      .request()
      .input("titulo", sql.NVarChar(100), posts.titulo)
      .input("cuerpo", sql.NText, posts.cuerpo)
      .input("tipo", sql.TinyInt, posts.tipo)
      .input("imagenEncabezado", sql.VarChar, posts.imagenEncabezado)
      .input("usuarioCreador", sql.Int, posts.usuarioCreador)
      .input("proyecto", sql.VarChar(100), posts.proyecto)

      .query(posts.queryInsert);
    if (response.rowsAffected <= 0) {
      throw "No existe datos con esos parámetros";
    }
    res.status(200).json({ message: "Registrado", data: data });
  } catch (e) {
    console.error(`Hay clavo tio ${e}`);
    res.status(300).json({ error: `Hay clavo tio ${e}` });
  }
});

router.put("/post/:id", async (req, res) => {
  //modificar
  try {
    let data = { ...req.body, ...req.params };
    let posts = new PostModule(data);
    let pool = await sql.connect(config);
    let response = await pool
      .request()
      .input("id", sql.Int, posts.id)
      .input("tipo", sql.Int, posts.tipo)
      .input("titulo", sql.NVarChar(100), posts.titulo)
      .input("cuerpo", sql.NText, posts.cuerpo)
      .input("imagenEncabezado", sql.VarChar, posts.imagenEncabezado)
      .input("usuarioCreador", sql.Int, posts.usuarioCreador)
      .query(posts.queryUpdate);
    res.status(200).json({ message: "Modificado correctamente", data: data });
  } catch (e) {
    console.error(`Hay clavo tio ${e}`);
    res.status(300).json({ error: `Hay clavo tio ${e}` });
  }
});

router.delete("/post/:id", async (req, res) => {
  //eliminar
  try {
    let data = { ...req.body, ...req.params };
    let posts = new PostModule(data);
    let pool = await sql.connect(config);
    let response = await pool
      .request()
      .input("id", sql.Int, posts.id)
      .query(posts.queryDelete);
    res.status(200).json({ message: "Datos han sido Eliminados" });
  } catch (e) {
    console.error(`Hay clavo tio ${e}`);
    res.status(300).json({ error: `Hay clavo tio ${e}` });
  }
});

module.exports = router;
