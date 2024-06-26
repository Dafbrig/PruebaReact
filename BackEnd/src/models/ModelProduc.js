// Importa la instancia de la base de datos desde el módulo de configuración de la base de datos
import database from "../database/database.js";

// Importa DataTypes desde Sequelize, que contiene los tipos de datos que se pueden usar en los modelos
import { DataTypes } from "sequelize";

// Define un nuevo modelo llamado 'pruebaproducto' en la base de datos
// El modelo representa una tabla en la base de datos con las siguientes columnas y tipos de datos
const productModel = database.define('pruebaproducto', {
    // Columna 'NomProduc' de tipo STRING
    NomProduc: {type: DataTypes.STRING},
    // Columna 'DecripProduc' de tipo STRING
    DecripProduc: {type: DataTypes.STRING},
    // Columna 'CantProduc' de tipo INTEGER
    CantProduc: {type: DataTypes.INTEGER},
});

// Exporta el modelo 'productModel' para que pueda ser utilizado en otras partes de la aplicación
export default productModel;
