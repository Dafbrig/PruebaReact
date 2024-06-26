// Importa el módulo express para crear la aplicación del servidor
import express from "express";
// Importa el middleware CORS para permitir solicitudes desde otros dominios
import cors from 'cors';
// Importa la instancia de la base de datos desde el archivo de configuración de la base de datos
import database from './src/database/database.js';
// Importa el enrutador de productos desde el archivo de rutas
import RouteProduc from './src/routes/RouteProduc.js';

// Crea una nueva instancia de la aplicación Express
const app = express();

// Usa el middleware CORS en la aplicación
app.use(cors());
// Usa el middleware para parsear cuerpos de solicitudes JSON
app.use(express.json());
// Usa el enrutador de productos para las rutas que comienzan con '/producto'
app.use('/producto', RouteProduc);

try {
    // Intenta autenticar la conexión a la base de datos
    await database.authenticate();
    console.log("Conexión exitosa a la base de datos");
} catch (error) {
    // Captura y muestra cualquier error de conexión
    console.error(`Error de conexión a la base de datos: ${error}`);
}

// Define una ruta raíz para probar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('¡El servidor está funcionando correctamente!');
});

// Inicia el servidor en el puerto 8000
app.listen(8000, () => {
    console.log('Servidor activo en http://localhost:8000/');
});
