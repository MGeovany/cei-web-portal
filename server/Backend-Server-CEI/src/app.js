import express from "express";
import config from "./config";

//Importar rutas
import contactanosRoutes from "./routes/contactanos.routes";
import rolesRoutes from "./routes/roles.routes";
import usuariosRoutes from "./routes/usuarios.routes";
import accesoRoutes from "./routes/acceso.routes";
//import facultadRoutes from "./routes/facultad.routes";
//import postulateRoutes from "./routes/postulate.routes";

const app = express();

//Settings
app.set("port", config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use(contactanosRoutes);
app.use(rolesRoutes);
app.use(usuariosRoutes);
app.use(accesoRoutes);
//app.use(facultadRoutes);
//app.use(postulateRoutes);

export default app;
