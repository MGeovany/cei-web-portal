module.exports = class InicioCarousel {
  constructor(data, filter) {
    this.db = "InicioCarousel";
    this.id = data?.id || "";
    this.imagen = data?.tipo || "";
    this.titulo = data?.titulo || "";
    this.descripcion = data?.descripcion || "";

    this.queryGet = `
        SELECT id,imagen,titulo,descripcion
            FROM ${this.db}`;

    this.queryGetById = `SELECT 
    SELECT id,imagen,titulo,descripcion
    FROM ${this.db}`;

    this.queryInsert = `INSERT INTO ${this.db} (id,imagen,titulo,descripcion) VALUES 
        ( @id,@imagen,@titulo,@descripcion);`;

    this.queryUpdate = `UPDATE ${this.db} SET 
            imagen=@imagen,
            titulo=@titulo,
            descripcion=@descripcion,
            WHERE id=@id;`;
    this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id `;
  }
};
