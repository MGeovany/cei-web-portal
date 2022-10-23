module.exports = class Casos {
  constructor(data, filter) {
    this.db = "Post";
    this.id = data.id || "";
    this.tipo = data.tipo || ""; //casos
    this.titulo = data.titulo || "";
    this.cuerpo = data.cuerpo || ""; //descripcion
    this.imagenEncabezado = data.imagenEncabezado || "";
    this.usuarioCreador = data.usuarioCreador || "";
    this.fechaCreado = data.fechaCreado || "";
    this.proyecto = data.proyecto || "";
    this.seccionCasos = data.seccionCasos || "";

    this.queryGetFirst10 = `
              SELECT 
              id
              ,tipo
              ,titulo
              ,cuerpo
              ,imagenEncabezado
              ,usuarioCreador
              ,fechaCreado
              ,seccionCasos
              FROM Post P
              WHERE tipo = 2`; //listo

    if (this.seccionCasos || this.seccionCasos != "") {
      this.queryGetFirst10 = `${this.queryGetFirst10} AND seccionCasos=@SeccionCasos`;
    }

    this.queryGetById = ` SELECT  
              id
              ,tipo
              ,titulo
              ,cuerpo
              ,usuarioCreador
              ,fechaCreado
              ,seccionCasos
              FROM Post P
              WHERE tipo = 2
              AND id = @id
              ORDER BY fechaCreado;`; //listo

    this.queryInsert = `INSERT INTO ${this.db} 
              (tipo ,titulo,cuerpo,usuarioCreador,fechaCreado,imagenEncabezado,seccionCasos)
              OUTPUT INSERTED.id 
              VALUES 
              (2 ,@titulo,@cuerpo,@usuarioCreador,GETDATE(),@imagenEncabezado,@seccionCasos);`; //listo

    this.queryUpdate = `UPDATE ${this.db} SET 
              titulo=@titulo,
              cuerpo=@cuerpo,
              proyecto = @proyecto,
              seccionCasos = @seccionCasos
              WHERE id=@id AND tipo=2;`;
    this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id AND tipo = 2`; //LISTO

    this.queryUpdateIntegrantes = `UPDATE dbo.Integrantes SET 
          nombre = @nombre,
          correo = @correo,
          proyecto = @proyecto,
          seccionCasos = @seccionCasos
          WHERE id = @id_ ;`;

    this.queryGetByFilter = `
              SELECT 
              id
              ,tipo
              ,titulo
              ,cuerpo
              ,imagenEncabezado
              ,usuarioCreador
              ,fechaCreado
              ,seccionCasos
              FROM Post P
              WHERE tipo = 2
              AND seccionCasos=@seccionCasos
          `;
  }
};
