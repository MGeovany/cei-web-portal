<h1 align="center">
  Welcome to CEI | Centro de Emprendimiento e Innovación 👋
</h1>
<p align="center">
  <a href="https://cei-web-portal-mgeovany.vercel.app/" target="_blank">
    <img
      alt="deploy"
      src="https://img.shields.io/website?down_color=red&down_message=offline&label=deploy&up_color=brightgreen&up_message=online&url=https%3A%2F%2Fcei-web-portal-mgeovany.vercel.app%2F"
    />
  </a>

  <a href="https://github.com/MGeovany/cei-web-portal" target="_blank">
    <img
      alt="Github Stars"
      src="https://img.shields.io/github/stars/mgeovany/cei-web-portal?label=Repo%20Stars"
    />
  </a>
  <a href="https://mantine.dev/" target="_blank">
    <img
      alt="mantine"
      src="https://img.shields.io/npm/v/@mantine/core?label=mantine"
    />
  </a>
  <a href="https://react-redux.js.org/" target="_blank">
    <img
      alt="redux"
      src="https://img.shields.io/npm/v/react-redux?color=purple&label=react-redux"
    />
  </a>
  <a href="https://es.reactjs.org/" target="_blank">
    <img alt="react" src="https://img.shields.io/npm/v/react?label=react" />
  </a>
</p>



> About

### 🏠 [Homepage](https://github.com/MGeovany/cei-web-portal)

### ✨ [Demo](https://cei-web-portal-mgeovany.vercel.app/)

## Author

👤 **Marlon Castro, Valeria Figueroa, Kevin Avelar**

* Website: https://github.com/MGeovany
* Github: [@mgeovany](https://github.com/mgeovany), [@valeriafigueroas](https://github.com/valeriafigueroas), [@AvelarXD13](https://github.com/AvelarXD13)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/MGeovany/cei-web-portal/issues). 

## Show your support

Give a ⭐️ if you liked this project!

<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="End_Points_0"></a>End Points</h1>
<h3 class="code-line" data-line-start=2 data-line-end=3 ><a id="Contactanos___100Contactanos_2"></a>Contactanos --&gt;  <code>/1.0.0/Contactanos</code></h3>
<ul>
<li class="has-line-data" data-line-start="3" data-line-end="4">id int IDENTITY(1,1) NOT NULL</li>
<li class="has-line-data" data-line-start="4" data-line-end="5">comentario varchar(300)</li>
<li class="has-line-data" data-line-start="5" data-line-end="6">nombre varchar(50)</li>
<li class="has-line-data" data-line-start="6" data-line-end="7">email varchar(70)</li>
<li class="has-line-data" data-line-start="7" data-line-end="8">telefono varchar(20)</li>
</ul>
<h3 class="code-line" data-line-start=12 data-line-end=13 ><a id="Evento__100Evento_12"></a>Evento --&gt; <code>/1.0.0/Evento</code></h3>
<ul>
<li class="has-line-data" data-line-start="13" data-line-end="14">id int PRIMARY KEY IDENTITY(1,1)</li>
<li class="has-line-data" data-line-start="14" data-line-end="15">fecha date</li>
<li class="has-line-data" data-line-start="15" data-line-end="16">title varchar(50)</li>
<li class="has-line-data" data-line-start="16" data-line-end="17">descripcion varchar(max)</li>
<li class="has-line-data" data-line-start="17" data-line-end="18">usuarioCreador int</li>
<li class="has-line-data" data-line-start="18" data-line-end="20">fechaCreado datetime</li>
</ul>
<h3 class="code-line" data-line-start=20 data-line-end=21 ><a id="Post__100Post_20"></a>Post --&gt; <code>/1.0.0/Post</code></h3>
<ul>
<li class="has-line-data" data-line-start="21" data-line-end="22">id int PRIMARY KEY NOT NULL IDENTITY(1,1)</li>
<li class="has-line-data" data-line-start="22" data-line-end="23">tipo tinyint</li>
<li class="has-line-data" data-line-start="23" data-line-end="24">titulo varchar(100)</li>
<li class="has-line-data" data-line-start="24" data-line-end="25">imagenEncabezado varchar(200)</li>
<li class="has-line-data" data-line-start="25" data-line-end="26">cuerpo ntext</li>
<li class="has-line-data" data-line-start="26" data-line-end="27">usuarioCreador int,</li>
<li class="has-line-data" data-line-start="27" data-line-end="28">fechaCreado datetime</li>
</ul>
<h3 class="code-line" data-line-start=30 data-line-end=31 ><a id="Postulacion__100Postulacion_30"></a>Postulacion --&gt; <code>/1.0.0/Postulacion</code></h3>
<ul>
<li class="has-line-data" data-line-start="31" data-line-end="32">id int IDENTITY(1,1) NOT NULL PRIMARY KEY</li>
<li class="has-line-data" data-line-start="32" data-line-end="33">representante varchar(70)</li>
<li class="has-line-data" data-line-start="33" data-line-end="34">correo varchar(70)</li>
<li class="has-line-data" data-line-start="34" data-line-end="35">cuenta varchar(20)</li>
<li class="has-line-data" data-line-start="35" data-line-end="36">celular varchar(20)</li>
<li class="has-line-data" data-line-start="36" data-line-end="37">genero tinyint</li>
<li class="has-line-data" data-line-start="37" data-line-end="38">tipo int, – IDEA O EMPRENDIMIENTO</li>
<li class="has-line-data" data-line-start="38" data-line-end="39">descripcion varchar(200)</li>
<li class="has-line-data" data-line-start="39" data-line-end="40">sede int</li>
<li class="has-line-data" data-line-start="40" data-line-end="41">equipoTrabajo tinyint --si o no</li>
<li class="has-line-data" data-line-start="41" data-line-end="42">redesSociales tinyint --si o no</li>
<li class="has-line-data" data-line-start="42" data-line-end="43">rubro tinyint – de la tabla rubo</li>
<li class="has-line-data" data-line-start="43" data-line-end="44">expectativas tinyint – de la tabla expectativas</li>
<li class="has-line-data" data-line-start="44" data-line-end="45">fechaCreado datetime</li>
<li class="has-line-data" data-line-start="45" data-line-end="46">fechaCerrado datetime</li>
<li class="has-line-data" data-line-start="46" data-line-end="48">estado tinyint --de la tabla estado</li>
</ul>
<h3 class="code-line" data-line-start=48 data-line-end=49 ><a id="Usuario__100Usuario_48"></a>Usuario --&gt; <code>/1.0.0/Usuario</code></h3>
<ul>
<li class="has-line-data" data-line-start="49" data-line-end="50">id int IDENTITY(1,1) NOT NULL PRIMARY KEY</li>
<li class="has-line-data" data-line-start="50" data-line-end="51">usuario varchar(50)</li>
<li class="has-line-data" data-line-start="51" data-line-end="52">contrasena varchar(150)</li>
<li class="has-line-data" data-line-start="52" data-line-end="54">correo varchar(70)</li>
</ul>
