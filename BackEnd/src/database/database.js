// Importa la clase Sequelize del paquete 'sequelize'
import { Sequelize } from "sequelize"; 

// Crea una nueva instancia de Sequelize para la conexión a la base de datos
const database = new Sequelize('producto', 'root', '', {
    host: 'localhost',  // El servidor donde se encuentra la base de datos (localhost en este caso)
    dialect: 'mysql',   // El tipo de base de datos (MySQL en este caso)
});

// Exporta la instancia de Sequelize como el valor por defecto del módulo
// Esto permite que otros módulos importen esta configuración de la base de datos
export default database;