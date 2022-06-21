import { request } from "express";
import { getConnection, sql, queries } from "../database";


export const getContactanos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(queries.getAllContactanos);
    res.json(result.recordset);
  } catch (error) {
    //Error interno del servidor
    res.status(500);
    res.send(error.message);
  }
};

export const createNewContactanos = async (req, res) => {
  const { nombre, email, celular, comentario, fecha_registro } = req.body;

  if (
    nombre == null ||
    email == null ||
    celular == null ||
    comentario == null ||
    fecha_registro == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all Fields" });
  }

  try {
    const pool = await getConnection();

    //mandamos los parametros que vamos a capturar
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("email", sql.VarChar, email)
      .input("celular", sql.VarChar, celular)
      .input("comentario", sql.Text, comentario)
      .input("fecha_registro", sql.DateTime, fecha_registro)
      .query(queries.addNewContactanos);

    res.json({ nombre, email, celular, comentario, fecha_registro });
  } catch (error) {
    //Error interno del servidor
    res.status(500);
    res.send(error.message);
  }
};

export const getContactanosByID = async (req, res)=>{
  const {id} = req.params
  
  const pool = await getConnection();
  const result = await pool
   .request()
  .input("id_contacto", id)
  .query(queries.getContactanosByID)
  console.log(result);
  res.send(result.recordset)
}
//por id
export const deleteContactanos = async(req, res)=>{
  const {id} = req.params
  
  const pool = await getConnection();
  const result = await pool
  .request()
  .input("id_contacto", id)
  .query(queries.deleteContactanos)
  res.sendStatus(204);
 
}

export const updateContactanos = async(req, res)=>{
  const { nombre, email, celular, comentario, fecha_registro } = req.body;
  const {id} = req.params;
  if (
    nombre == null ||
    email == null ||
    celular == null ||
    comentario == null ||
    fecha_registro == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all Fields" });
  }
 
  const pool = await getConnection();
  await pool.request()
     .input("nombre", sql.VarChar, nombre)
      .input("email", sql.VarChar, email)
      .input("celular", sql.VarChar, celular)
      .input("comentario", sql.Text, comentario)
      .input("fecha_registro", sql.DateTime, fecha_registro)
      .input("id_contacto", id)
      .query(queries.updateContactanos);

}