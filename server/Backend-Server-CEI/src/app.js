import express from "express";
import config from "./config";

//Importar rutas
import contactanosRoutes from "./routes/contactanos.routes";

const app = express();

//Settings
app.set("port", config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use(contactanosRoutes);

export default app;
