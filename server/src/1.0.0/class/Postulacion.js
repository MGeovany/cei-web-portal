module.exports = class Postulacion {
  constructor(data) {
    this.db = "Postulacion";
    this.id = data.id;
    this.representante = data.representante;
    this.correo = data.correo;
    this.cuenta = data.cuenta;
    this.celular = data.celular;
    this.genero = data.genero;
    this.tipo = data.tipo;
    this.descripcion = data.descripcion;
    this.sede = data.sede;
    this.redesSociales = data.redesSociales;
    this.equipoTrabajo = data.equipoTrabajo;
    this.rubro = data.rubro;
    this.expectativas = data.expectativas;
    this.estado =data.estado;
    this.fechaCreado =data.fechaCreado;
    this.fechaCerrado =data.fechaCerrado;


    this.queryGet = `SELECT * FROM ${this.db}`;

    this.querySave = 
    `INSERT INTO ${this.db} (representante, correo, cuenta, celular,
    genero, tipo, descripcion, sede,redesSociales, equipoTrabajo,rubro,expectativas,estado,fechaCreado) VALUES 
    (@representante, @correo, @cuenta, @celular, @genero, @tipo, @descripcion,
    @sede, @redesSociales,@equipoTrabajo,@rubro,@expectativas,@estado,GETDATE())`;

    this.queryGetById = 
    `SELECT * FROM ${this.db} WHERE id = @id`;

    this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id`;

    this.queryUpdate = `UPDATE ${this.db} SET 
    representante=@representante,
    correo=@correo,
    cuenta=@cuenta,
    celular=@celular,
    genero=@genero,
    tipo=@tipo,
    descripcion=@descripcion,
    sede=@sede,
    redesSociales=@redesSociales,
    rubro=@rubro,
    expectativas=@expectativas,
    estado=@estado,
    equipoTrabajo=@equipoTrabajo,
    fechaCerrado = @fechaCerrado
    WHERE id = @id`
  }
};
