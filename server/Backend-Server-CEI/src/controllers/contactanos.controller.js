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
      .input("comentario", sql.VarChar, comentario)
      .input("fecha_registro", sql.VarChar, fecha_registro)
      .query(queries.addNewContactanos);

    res.json({ nombre, email, celular, comentario, fecha_registro });
  } catch (error) {
    //Error interno del servidor
    res.status(500);
    res.send(error.message);
  }
};

//export const getContactanosByID