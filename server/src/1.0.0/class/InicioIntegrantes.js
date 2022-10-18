module.exports = class InicioIntegrantes {
  constructor(data, filter) {
    this.db = "InicioIntegrantes";

    this.imagen = data?.tipo || "";
    this.nombre = data?.nombre || "";
    this.titulo = data?.titulo || "";
    this.descripcion = data?.descripcion || "";

    this.queryGet = `
        SELECT nombre,imagen,titulo,descripcion
            FROM ${this.db}`;

    this.queryInsert = `INSERT INTO ${this.db} (nombre,imagen,titulo,descripcion) VALUES 
        ( @nombre,@imagen,@titulo,@descripcion);`;

    this.queryUpdate = `UPDATE ${this.db} SET 
            imagen=@imagen,
            nombre=@nombre,
            titulo=@titulo,
            descripcion=@descripcion`;
    this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id `;
  }
};
