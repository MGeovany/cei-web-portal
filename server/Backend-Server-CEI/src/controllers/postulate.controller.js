import {getConnection, sql, queries} from "../database";

export const getPostulate = async (req, res) =>{
    try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(queries.getAllPostulate);
    res.json(result.recordset)

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewPostulate = async(req, res) =>{
const{nombre, email, ncuenta, celular, genero, etapa_idea, nombre_idea, equipo_trabajo, 
    sede, id_facultad, rubro, idea_comentario, pre_incubacion, redes_sociales, enlace_redes, firma}= req.body;
if(
    nombre == null ||
    email == null ||
    ncuenta == null ||
    celular == null ||
    genero == null ||
    etapa_idea == null ||
    nombre_idea == null ||
    equipo_trabajo == null ||
    sede == null ||
    rubro == null ||
    idea_comentario == null ||
    pre_incubacion == null ||
    redes_sociales == null ||
    enlace_redes == null ||
    firma == null 
){
    return res.status(400).json({ msg: "Bad Request. Please Fill all Fields" });
}
    try {
        const pool = await getConnection();
        await pool
        .request()
        .input("nombre", sql.VarChar, nombre)
        .input("email", sql.VarChar, email)
        .input("ncuenta", sql.Int, ncuenta)
        .input("nombre", sql.VarChar, nombre)
        .input("celular", sql.VarChar, celular)
        .input("genero", sql.VarChar, genero)
        .input("etapa_idea", sql.VarChar, etapa_idea)
        .input("nombre_idea", sql.VarChar, nombre_idea)
        .input("equipo_trabajo", sql.Char, equipo_trabajo)
        .input("sede", sql.VarChar, sede)
        .input("rubro", sql.VarChar, rubro)
        .input("idea_comentario", sql.Text, idea_comentario)
        .input("pre_incubacion", sql.VarChar, pre_incubacion)
        .input("redes_sociales", sql.VarChar, redes_sociales)
        .input("enlace_redes", sql.VarChar, enlace_redes)
        .input("firma", sql.Char, firma)
        .query(queries.addNewPostulate)

        res.json({ nombre, email, ncuenta, celular, genero, etapa_idea, nombre_idea, equipo_trabajo, 
            sede, id_facultad, rubro, idea_comentario, pre_incubacion, redes_sociales, enlace_redes, firma});

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};