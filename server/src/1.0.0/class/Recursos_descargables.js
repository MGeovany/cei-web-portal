module.exports = class Recursos{
    constructor(data){
        this.db = "Archivos";
        this.nombre_archivo= data.nombre_archivo || '';
        this.descripcion= data.descripcion || '';
        this.titulo= data.titulo || '';
        this.fecha_creado= data.fecha_creado || '';
        this.imagen_tarjeta= data.imagen_tarjeta || '';
        this.autor= data.autor || '';
        

        this.queryGet = `SELECT * FROM ${this.db}`;

        this.queryInsert = `INSERT INTO ${this.db} 
        (nombre_archivo ,descripcion,titulo, fecha_creado, imagen_tarjeta, autor) 
        VALUES 
        (nombre_archivo, @descripcion,@titulo, GETDATE(), @imagen_tarjeta, @autor)`;

        this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id`
    }
}