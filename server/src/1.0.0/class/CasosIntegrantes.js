module.exports = class casosIntegrantes {
  constructor(data, filter) {
    this.db = "CasosIntegrantes";
    this.id = data?.id || "";
    this.imagen = data?.imagen || "";
    this.nombre = data?.nombre || "";
    this.correo = data?.correo || "";

    this.queryGet = `SELECT id,nombre,correo,imagen FROM ${this.db}`;
    this.queryGetByPost = `SELECT id,nombre,correo,imagen FROM ${this.db} where caso=@caso`;
    this.queryInsert = `INSERT INTO ${this.db} (nombre,correo,imagen) VALUES (@nombre,@correo,@imagen);`;

    this.queryUpdate = `UPDATE ${this.db} SET 
            imagen=@imagen,
            nombre=@nombre,
            correo=@correo,
            descripcion=@descripcion`;
    this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id `;
  }
};
