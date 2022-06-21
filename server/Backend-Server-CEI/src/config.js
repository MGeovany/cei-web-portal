//Importacion para variables de entorno
import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 4000,
  //dbUser: process.env.DB_USER || "",
  //dbPassword: process.env.DB_PASSWORD || "",
  //dbServer: process.env.DB_SERVER || "",
  //dbDatabase: process.env.DB_DATABASE || "",
};
