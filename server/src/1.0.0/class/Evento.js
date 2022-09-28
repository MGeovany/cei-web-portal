module.exports = class Evento{
    constructor(data){
        this.db = 'Evento';
        this.id = data.id;
        this.fechaInicio = data.fechaInicio;
        this.fechaFin = data.fechaFin;
        this.titulo= data.titulo;
        this.descripcion = data.descripcion;
        this.sede = data.sede;
        this.semana = data.semana;
        
        this.usuarioCreador = data.usuarioCreador;
        this.fechaCreado = data.fechaCreado;

        this.queryGet = `select 
            E.*,
            dateDiff(minute,e.fechaInicio,e.fechaFin) 'duracion',
            s.nombre 'nombreSede' 
            from ${this.db} E
            INNER JOIN Sede S 
            ON E.sede = S.id`;

        this.querySave = 
        `INSERT INTO ${this.db} (fechaInicio, fechaFin, titulo,descripcion,semana, sede, usuarioCreador) VALUES 
        (@fechaInicio, @fechaFin, @titulo,@descripcion,@semana,@sede,@usuarioCreador)`;
    
        this.queryGetById = `${this.queryGet} WHERE E.id = @id`;
    
        this.queryDelete = `DELETE FROM ${this.db} WHERE id=@id`;
    
        this.queryUpdate = `UPDATE ${this.db} SET 
            fechaInicio=@fechaInicio,
            fechaFin=@fechaFin,
            titulo=@titulo,
            descripcion=@descripcion,
            semana=@semana,
            sede=@sede
        WHERE id = @id`



        this.queryGetCalendarEvents= `select 
        E.titulo 'title',
        dateDiff(MINUTE, E.fechaInicio,E.fechaFin) 'allday',
        CAST(E.fechaInicio AS datetime) 'start',
        CAST(E.fechaFin AS datetime) 'end'
      FROM Evento E`
    }
}