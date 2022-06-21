import { request } from "express";
import { getConnection, sql, queries2 } from "../database";


export const getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(queries2.getAllUsers);
    res.json(result.recordset);
  } catch (error) {
    //Error interno del servidor
    res.status(500);
    res.send(error.message);
  }
};

export const createNewUsuarios = async (req, res) => {
  const { user_name, password, id_rol, estado } = req.body;

  if (
    user_name == null ||
    password == null ||
    id_rol == null ||
    estado == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all Fields" });
  }

  try {
    const pool = await getConnection();

    //mandamos los parametros que vamos a capturar
    await pool
      .request()
      .input("user_name", sql.VarChar, user_name)
      .input("password", sql.VarChar, password)
      .input("id_rol", sql.Int, id_rol)
      .input("estado", sql.Char, estado)
      .query(queries2.addNewUsers);

    res.json({ user_name, password, id_rol, estado });
  } catch (error) {
    //Error interno del servidor
    res.status(500);
    res.send(error.message);
  }
};

export const getUsuariosByID = async (req, res)=>{
  const {id} = req.params
  
  const pool = await getConnection();
  const result = await pool
   .request()
  .input("id_user", id)
  .query(queries2.getUsersByID)
  console.log(result);
  res.send(result.recordset)
}
//por id
export const deleteUsuarios = async(req, res)=>{
  const {id} = req.params
  
  const pool = await getConnection();
  const result = await pool
  .request()
  .input("id_user", id)
  .query(queries2.deleteUsers)
  res.sendStatus(204);
 
}

export const updateUsuarios = async(req, res)=>{
  const { user_name, password, id_rol, estado } = req.body;
  const {id} = req.params;
  if (
    user_name == null ||
    password == null ||
    id_rol == null ||
    estado == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all Fields" });
  }
 
  const pool = await getConnection();
  await pool.request()
    .input("user_name", sql.VarChar, user_name)
    .input("password", sql.VarChar, password)
    .input("id_rol", sql.Int, id_rol)
    .input("estado", sql.Char, estado)    
    .input("id_user", id)
    .query(queries2.updateUsers);

}