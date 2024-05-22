// Crear pool para la conexion a la base de datos
const Pool = require('pg').Pool;


const db = new Pool({
  connectionString: "postgresql://myPostgres_owner:D0yM9RZnBgPJ@ep-floral-moon-a5oafbd3.us-east-2.aws.neon.tech/catedraapi?sslmode=require",
});


module.exports = { db };
