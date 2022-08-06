
CREATE TABLE Usuario(
	id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	usuario varchar(50),
	contrasena varchar(150),
	correo varchar(70) 
);

CREATE TABLE Post(
	id int PRIMARY KEY NOT NULL IDENTITY(1,1) ,
	tipo tinyint,
	titulo varchar(100),
	imagenEncabezado varchar(200),
	cuerpo ntext,
	usuarioCreador int,
	fechaCreado datetime 
);

CREATE TABLE Evento(
	id int PRIMARY KEY IDENTITY(1,1),
	fecha date,
	title varchar(50),
	descripcion varchar(max),
	usuarioCreador int,
	fechaCreado datetime
);

CREATE TABLE Postulacion(
	id int IDENTITY(1,1) NOT NULL PRIMARY KEY ,
	representante varchar(70),
	correo varchar(70),
	cuenta varchar(20),
	celular varchar(20),
	genero tinyint,
	tipo int, -- IDEA O EMPRENDIMIENTO
	descripcion varchar(200),
	sede int,
	equipoTrabajo tinyint, --si o no
	redesSociales tinyint, --si o no
	rubro tinyint, -- de la tabla rubo
	expectativas tinyint, -- de la tabla expectativas
	fechaCreado datetime;
	fechaCerrado datetime;
	estado tinyint --de la tabla estado
);


CREATE TABLE PostulacionBitacora(
	id int IDENTITY(1,1) NOT NULL,
	postulacion int,
	fecha datetime,
	descripcion varchar(max),
	usuario int 
);
	

CREATE TABLE Rubro(
	id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	descripcion varchar(100),
);
CREATE TABLE Expectativa(
	id int IDENTITY(1,1) NOT NULL,
	descripcion varchar(100),
);


CREATE TABLE Estado(
	id int IDENTITY(1,1) NOT NULL,
	descripcion varchar(100),
);

CREATE TABLE Contactanos(
	id int IDENTITY(1,1) NOT NULL,
	comentario varchar(300),
	nombre varchar(50),
	email varchar(70),
	telefono varchar(20),
);
