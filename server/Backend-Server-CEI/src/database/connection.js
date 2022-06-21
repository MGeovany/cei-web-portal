import sql from 'mssql';
import config from '../config'


//configuracion de base de datos
const dbSettings = {
    //ESTO SE CAMBIARA EN EL SERVER EN EL QUE SE MONTE EL PROYECTO

    user: "sa",
    password: "$qL$@P2k22",
    server: "localhost",
    database: "DB_CEI",
    //user: config.dbUser,
    //password: config.dbPassword,
    //server: config.dbServer,
    //database: config.dbDatabase,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
        },
    //port: 1433 //ESTE SE HABILITARIA SI FUERA NECESARIO
}

//fuuncion para probar conexion con la base de datos
export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings)
        return pool;
    } catch (error) {
        console.error(error)
    }
}

export {sql};