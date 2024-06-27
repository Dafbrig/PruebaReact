// Importa el módulo express para crear el router
import express from 'express';
// Importa las funciones del controlador desde el archivo ControlProduc
import { getAllProduct, getProduct, insertProduct, updateProduct, deleteProduct } from '../controllers/ControlProduc.js';

// Crea una nueva instancia de Router
const producRouter = express.Router();

// Define la ruta para obtener todos los productos y asocia la función getAllProduct del controlador
producRouter.get('/', getAllProduct);

// Define la ruta para obtener un producto específico por su ID y asocia la función getProduct del controlador
producRouter.get('/:IdProduc', getProduct);

// Define la ruta para insertar un nuevo producto y asocia la función insertProduct del controlador
producRouter.post('/', insertProduct);

// Define la ruta para actualizar un producto existente por su ID y asocia la función updateProduct del controlador
producRouter.put('/:IdProduc', updateProduct);

// Define la ruta para eliminar un producto existente por su ID y asocia la función deleteProduct del controlador
producRouter.delete('/:IdProduc', deleteProduct);

// Exporta el router para que pueda ser utilizado en otras partes de la aplicación
export default producRouter;
